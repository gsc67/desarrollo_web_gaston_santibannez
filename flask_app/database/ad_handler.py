from sqlalchemy import create_engine, Column, Integer, BigInteger, String, ForeignKey, DateTime, Enum, Text
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
import json
from markupsafe import escape
import enum

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306

DATABASE_URL = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

class tipoEnum(enum.Enum):
    gato = "gato"
    perro = "perr

class unidadEnum(enum.Enum):
    a = "a"
    m = "m"

class redEnum(enum.Enum):
    whatsapp = "whatsapp"
    telegram = "telegram"
    X = "X"
    instagram = "instagram"
    tiktok = "tiktok"
    otra = "otra"

class Aviso(Base):
    __tablename__ = 'aviso_adopcion'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    fecha_ingreso = Column(DateTime, nullable=False)
    comuna_id   = Column(BigInteger, nullable=False)
    sector      = Column(String(100), nullable=True)
    nombre      = Column(String(200), nullable=False)
    email       = Column(String(100), nullable=False)
    celular     = Column(String(15), nullable=True)
    tipo        = Column(Enum(tipoEnum), nullable=False)
    cantidad    = Column(BigInteger, nullable=False)
    edad        = Column(BigInteger, nullable=False)
    unidad_medida = Column(Enum(unidadEnum), nullable=False)
    fecha_entrega = Column(DateTime, nullable=False)
    descripcion = Column(Text(500), nullable=True)

class Contacto(Base):
    __tablename__ = 'contactar_por'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    unidad_medida = Column(Enum(redEnum), nullable=False)
    identificador = Column(String(150), nullable=False)
    aviso_id = Column(BigInteger, nullable=False)

class Foto(Base):
    __tablename__ = 'foto'

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    ruta_archivo = Column(String(300), nullable=False)
    nombre_archivo = Column(String(300), nullable=False)
    aviso_id = Column(BigInteger, nullable=False)
    
def get_avisos():
    session = SessionLocal()
    avisos = session.query(Aviso).all()
    session.close()
    return avisos
    
# Inserta información válida en la base de datos
def new_ad(form: dict):
    # TODO
    pass
    session = SessionLocal()
    
    nombre = escape(form["contactName"])
    email = escape(form["contactEmail"])
    numero = form.get("contactPhoneNumber", None)  # safe
    WS = escape(form.get('contactwhatsappUser', None))
    TG = escape(form.get('contacttelegramUser', None))
    TW = escape(form.get('contactXUser', None))
    IG = escape(form.get('contactinstagramUser', None))
    TT = escape(form.get('contacttiktokUser', None))
    FL = escape(form.get('contactotraUser', None))
    contacto = Contacto(nombre=nombre, 
        email=email, 
        numero=numero,
        WS = WS,
        TG = TG,
        TW = TW,
        IG = IG,
        TT = TT,
        FL = FL)
    session.add(contacto)
    session.commit()
    
    
    region      = form["petRegion"]
    comuna      = form["petComuna"]
    sector      = escape(form.get("petSector", None))
    id_contacto = contacto.id
    especie     = form["petSpecies"]
    cantidad    = form["petQuantity"]
    edad        = form["petAge"]
    medida      = form["petAgeMeasure"]
    fecha       = form["petDelivery"]
    descripcion = form.get("petDescription", None)
    aviso = Aviso(region=region,
        comuna      = comuna      ,
        sector      = sector      ,
        id_contacto = id_contacto ,
        especie     = especie     ,
        cantidad    = cantidad    ,
        edad        = edad        ,
        medida      = medida      ,
        fecha       = fecha       ,
        descripcion = descripcion )
    session.add(aviso)
    session.commit()
    
    # TODO
    #foto = Foto()
    #session.add(foto)
    #session.commit()
    
    session.close()

def get_avisos(num):
    session = SessionLocal()
    avisos = reversed(session.query(Aviso).order_by(Aviso.id.desc()).limit(num).all())
    session.close()
    return avisos

def get_ALL_avisos():
    session = SessionLocal()
    avisos = reversed(session.query(Aviso).order_by(Aviso.id.desc()).all())
    session.close()
    return avisos

def get_fotos():
    session = SessionLocal()
    fotos = session.query(Foto).all()
    session.close()
    return fotos
    
def get_ad_by_ID(id):
    return Aviso.query.get(id)
    