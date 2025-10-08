from flask import Flask, request, render_template, redirect, url_for, session
from utils.validations import validate_login_user, validate_register_user, validate_confession, validate_conf_img
from database import region_handler
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import uuid

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
        return render_template( "postear.html", \
                                success=False, \
                                regiones=region_handler.get_regiones())
    else:
        for region in region_handler.get_regiones():
            print(region)
        return render_template("postear.html", success=True)

@app.route("/listado/")
def listado():
    return render_template("listado.html")

@app.route("/stats/")
def stats():
    return render_template("stats.html")

    
################################################################################

def validate_petRegion(region): pass #SQL
def validate_petComuna(comuna): pass #SQL
def validate_petSector(sector): return len(sector) <= 100

def validate_contactName(name): return 3 <= len(name) <= 200
def validate_contactEmail(mail):
    if not (1 <= len(mail) <= 100): return False
    elif (_ := mail.find("@")) < 1: return False
    elif (_ := mail.find(".", _ + 2)) == -1: return False
    elif _ >= len(mail) - 1: return False
    else: return True
def validate_contactPhoneNumber(number): 
    return  number[0] == "+" and \
            number[1:4] == "569" and \
            bool(re.match('^[0-9]*$', number[4:12])) and \
            len(number) == 12
def validate_platformsError(): pass 
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass
def validate_(): pass


if __name__ == "__main__":
    app.run(debug=True)
