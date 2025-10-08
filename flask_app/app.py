from flask import Flask, request, render_template, redirect, url_for, session
from utils.validations import validate_login_user, validate_register_user, validate_confession, validate_conf_img
from database import region_handler
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import uuid
import datetime
import re

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)
app.secret_key = "secret_key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

################################################################################
@app.route("/")
def main():
    return render_template("index.html")
    
@app.route("/postear/", methods=["GET", "POST"])
def postear():
    if request.method == "GET":
        success = False
    else:
        if validar_form(request.form):
            # insertar en base de datos
            success = True
        else: success = False
    return render_template( "postear.html", \
                            success  = success, \
                            regiones = region_handler.get_regiones(), \
                            comunas  = region_handler.get_comunas())

@app.route("/listado/")
def listado():
    return render_template("listado.html")

@app.route("/stats/")
def stats():
    return render_template("stats.html")

    
################################################################################

def validate_petSector(sector): return len(sector) <= 100

def validate_contactName(name): return 3 <= len(name) <= 200
def validate_contactEmail(mail):
    if not (1 <= len(mail) <= 100): return False
    elif (_ := mail.find("@")) < 1: return False
    elif (_ := mail.find(".", _ + 2)) == -1: return False
    elif _ >= len(mail) - 1: return False
    else: return True
def validate_contactPhoneNumber(number): 
    if number == '': return True
    else:
        return number[0] == "+" and \
            number[1:4] == "569" and \
            bool(re.match('^[0-9]*$', number[4:12])) and \
            len(number) == 12

def validate_petSpecies(species): return species in ("perro", "gato")
def validate_petQuantity(quantity): 
    return bool(re.match('^[0-9]*$', quantity)) and int(quantity) > 0
def validate_petAge(age):
    return bool(re.match('^[0-9]*$', age)) and int(age) > 0
def validate_petAgeMeasure(measure): return measure in ("months","years")
def validate_petDelivery(s):
    try:
        assert len(s) == 16
        assert bool(re.match('^[0-9]*$', year  := s[0:4]))
        assert bool(re.match('^[0-9]*$', month := s[5:7]))
        assert bool(re.match('^[0-9]*$', day   := s[8:10]))
        assert bool(re.match('^[0-9]*$', hour  := s[11:13]))
        assert bool(re.match('^[0-9]*$', min_  := s[14:16]))
        assert s[4] == s[7] == "-"
        assert s[10] == "T"
        assert s[13] == ":"
        sendDate = datetime.datetime(int(year), \
            int(month), \
            int(day), \
            int(hour), \
            int(min_))
        lowDate = datetime.datetime.now() + datetime.timedelta(hours=3)
        assert sendDate > lowDate
        return True
    except:
        return False

def validate_platforms(form): 
    platforms = ["Whatsapp", "Telegram", "X", "Instagram", "Tiktok", "Fotolog"]
    checkNum = 0
    for plat in platforms:
        if form.get(f'contactThrough{plat}', 'false').lower() == 'true':
            checkNum += 1
            if not (4 <= len(form.get(f'contact{plat}User', '')) <= 50):
                return False
    return checkNum <= 5
def validate_images(form): return True  # pass

def validar_form(form: dict) -> bool:
    return region_handler.validate_petRegion(form["petRegion"]) and \
        region_handler.validate_petComuna(form["petComuna"]) and \
        validate_petSector(form.get("petSector", '')) and \
        validate_contactName(form["contactName"]) and \
        validate_contactEmail(form["contactEmail"]) and \
        validate_contactPhoneNumber(form.get("contactPhoneNumber", '')) and \
        validate_platforms(form) and \
        validate_petSpecies(form["petSpecies"]) and \
        validate_petQuantity(form["petQuantity"]) and \
        validate_petAge(form["petAge"]) and \
        validate_petAgeMeasure(form["petAgeMeasure"]) and \
        validate_petDelivery(form["petDelivery"]) and \
        validate_images(form)


if __name__ == "__main__":
    app.run(debug=True)
