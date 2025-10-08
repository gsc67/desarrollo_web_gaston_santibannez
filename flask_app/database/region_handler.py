from sqlalchemy import create_engine, Column, Integer, BigInteger, String, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
import json

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306

DATABASE_URL = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

class Region(Base):
    __tablename__ = 'region'

    id = Column(BigInteger, primary_key=True, autoincrement=False)
    nombre = Column(String(255), nullable=False)

    #comunas = relationship("Comuna", back_populates="comunas")

class Comuna(Base):
    __tablename__ = 'comuna'

    id = Column(BigInteger, primary_key=True, autoincrement=False)
    region_id = Column(BigInteger, nullable=False)
    nombre = Column(String(255), nullable=False)

    #region = relationship("Region", back_populates="region")
    

def get_regiones():
    session = SessionLocal()
    regiones = session.query(Region).all()
    session.close()
    return regiones
    
def get_comunas():
    session = SessionLocal()
    comunas = session.query(Comuna).all()
    session.close()
    return comunas
    
def validate_petRegion(region): 
    session = SessionLocal()
    bool_ = session.query(Region).filter_by(id=region).first()
    session.close()
    if bool_ == None: return False
    else: return True
def validate_petComuna(comuna): 
    session = SessionLocal()
    bool_ = session.query(Comuna).filter_by(id=comuna).first()
    session.close()
    if bool_ == None: return False
    else: return True