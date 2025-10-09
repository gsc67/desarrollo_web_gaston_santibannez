from sqlalchemy import create_engine, Column, Integer, BigInteger, String, ForeignKey, DateTime, Enum, Text
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
import json
from markupsafe import escape
import enum
import datetime

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306

DATABASE_URL = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
PLATFORMS = ("whatsapp", "telegram", "X", "instagram", "tiktok", "otra")

engine = create_engine(DATABASE_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

class tipoEnum(enum.Enum):
    gato = "gato"
    perro = "perro"

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
    nombre = Column(Enum(redEnum), nullable=False)
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
    def esc(s, cut=False):
        if s == None: return s
        else: return escape(s) if not cut else escape(s)[1:]
    
    session = SessionLocal()
    
    fecha_ingreso   = datetime.datetime.now()
    comuna_id       = form["petComuna"]
    sector          = esc(form.get("petSector", None))
    nombre          = esc(form["contactName"])
    email           = esc(form["contactEmail"])
    celular         = esc(form["contactPhoneNumber"], True)
    tipo            = form["petSpecies"]
    cantidad        = form["petQuantity"]
    edad            = form["petAge"]
    unidad_medida   = form["petAgeMeasure"]
    _ = form["petDelivery"]
    year = _[0:4]
    month = _[5:7]
    day   = _[8:10]
    hour  = _[11:13]
    min_  = _[14:16]
    fecha_entrega   = datetime.datetime(int(year), \
                        int(month), \
                        int(day), \
                        int(hour), \
                        int(min_))
    descripcion     = esc(form.get("petDescription", None))
    
    aviso = Aviso( \
        fecha_ingreso   = fecha_ingreso,
        comuna_id       = comuna_id,    
        sector          = sector,       
        nombre          = nombre,          
        email           = email,           
        celular         = celular,         
        tipo            = tipo,       
        cantidad        = cantidad,
        edad            = edad,    
        unidad_medida   = unidad_medida,
        fecha_entrega   = fecha_entrega,
        descripcion     = descripcion \
        )
    session.add(aviso)
    session.commit()
        
    for plat in PLATFORMS:
        if form.get(f"contactThrough{plat}", "false").lower() == "true":
            nombre          = plat
            identificador   = esc(form[f"contact{plat}User"])
            aviso_id        = aviso.id
            
            contacto = Contacto(nombre=nombre, 
                identificador=identificador, aviso_id=aviso_id)
            session.add(contacto)
            session.commit()
    
    ### TODO: FOR (cada foto) ###
    if False:  # para evitar errores mientras no esté implementado
        ruta_archivo    = 0  # TODO
        nombre_archivo  = 0  # TODO
        aviso_id        = aviso.id
        
        foto = Foto(ruta_archivo=ruta_archivo, 
            nombre_archivo=nombre_archivo, aviso_id=aviso_id)
        session.add(foto)
        session.commit()
    ### END FOR ###
    
    session.close()

def get_avisos(num, offset=0):
    session = SessionLocal()
    avisos = reversed(session.query(Aviso).\
        order_by(Aviso.id.desc()).\
        limit(num).\
        offset(offset).\
        all()\
        )
        
    _ = session.query(Aviso).all()
    
    session.close()
    
    return (avisos, offset+num<len(_))

def get_fotos():
    session = SessionLocal()
    fotos = session.query(Foto).all()
    session.close()
    return fotos
    
def get_ad_by_ID(id):
    return Aviso.query.get(id)
    