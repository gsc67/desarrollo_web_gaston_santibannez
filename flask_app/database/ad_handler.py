from sqlalchemy import create_engine, Column, Integer, BigInteger, String, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
import json
from markupsafe import escape

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306

DATABASE_URL = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

class Aviso(Base):
    __tablename__ = 'aviso_adopcion'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    region      = Column(String(255), nullable=False)
    comuna      = Column(String(255), nullable=False)
    sector      = Column(String(100), nullable=True)
    id_contacto = Column(BigInteger, nullable=False)
    especie     = Column(String(5), nullable=False)
    cantidad    = Column(BigInteger, nullable=False)
    edad        = Column(BigInteger, nullable=False)
    medida      = Column(String(6), nullable=False)
    fecha       = Column(String(16), nullable=False)
    descripcion = Column(String(255), nullable=True)

class Contacto(Base):
    __tablename__ = 'contactar_por'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    nombre = Column(String(200), nullable=False)
    email = Column(String(100), nullable=False)
    numero = Column(String(12), nullable=True)
    WS = Column(String(50), nullable=True)
    TG = Column(String(50), nullable=True)
    TW = Column(String(50), nullable=True)
    IG = Column(String(50), nullable=True)
    TT = Column(String(50), nullable=True)
    FL = Column(String(50), nullable=True)

# TODO
# class Foto(Base):
    # __tablename__ = 'foto'

    #id = Column(BigInteger, primary_key=True, autoincrement=False)
    #nombre = Column(String(255), nullable=False)
    
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
    WS = escape(form.get('contactWhatsappUser', None))
    TG = escape(form.get('contactTelegramUser', None))
    TW = escape(form.get('contactXUser', None))
    IG = escape(form.get('contactInstagramUser', None))
    TT = escape(form.get('contactTiktokUser', None))
    FL = escape(form.get('contactFotologUser', None))
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