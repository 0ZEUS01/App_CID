-- Table: Role
CREATE TABLE Role (
    id_role SERIAL PRIMARY KEY,
    nom_role VARCHAR(255) NOT NULL
);

-- Table: Pays
CREATE TABLE Pays (
    id_pays SERIAL PRIMARY KEY,
    libelle_pays VARCHAR(100) NOT NULL
);

-- Table: Utilisateur
CREATE TABLE Utilisateur (
    id_utilisateur SERIAL PRIMARY KEY,
    prenom VARCHAR(100) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    num_telephone VARCHAR(20),
    username VARCHAR(100) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_naissance DATE NOT NULL,
    sexe CHAR(1) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    isDeleted BOOLEAN DEFAULT FALSE,
    pole INT REFERENCES Pole(id_pole) ON DELETE CASCADE,
    division INT REFERENCES Division(id_division) ON DELETE CASCADE,
    pays INT REFERENCES Pays(id_pays) ON DELETE SET NULL
);

-- Table: User_Role
CREATE TABLE User_Role (
    id_utilisateur INT REFERENCES Utilisateur(id_utilisateur) ON DELETE CASCADE,
    id_role INT REFERENCES Role(id_role) ON DELETE CASCADE,
    PRIMARY KEY (id_utilisateur, id_role)
);

-- Table: Client
CREATE TABLE Client (
    id_client SERIAL PRIMARY KEY,
    nom_client VARCHAR(255) NOT NULL,
    id_pays INT REFERENCES Pays(id_pays) ON DELETE SET NULL
);

-- Table: Marche
CREATE TABLE Marche (
    id_marche SERIAL PRIMARY KEY,
    libelle_marche VARCHAR(255) NOT NULL,
    Budget_total DOUBLE PRECISION CHECK (Budget_total >= 0),
    isPartage BOOLEAN DEFAULT FALSE,
    id_client INT REFERENCES Client(id_client) ON DELETE CASCADE
);

-- Table: Pole
CREATE TABLE Pole (
    id_pole SERIAL PRIMARY KEY,
    nom_pole VARCHAR(255) NOT NULL
);

-- Table: Division
CREATE TABLE Division (
    id_division SERIAL PRIMARY KEY,
    nom_division VARCHAR(255) NOT NULL,
    id_pole INT REFERENCES Pole(id_pole) ON DELETE CASCADE
);

-- Table: Affaire
CREATE TABLE Affaire (
    id_affaire SERIAL PRIMARY KEY,
    libelle_affaire VARCHAR(255) NOT NULL,
    prix_global DOUBLE PRECISION CHECK (prix_global >= 0),
    status_affaire VARCHAR(100) NOT NULL,
    num_marche INT REFERENCES Marche(id_marche) ON DELETE SET NULL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    date_arret DATE,
    date_recommencement DATE,
    pourcentage_assurance DOUBLE PRECISION CHECK (pourcentage_assurance >= 0 AND pourcentage_assurance <= 100),
);

-- Table: Mission
CREATE TABLE Mission (
    id_mission SERIAL PRIMARY KEY,
    libelle_mission VARCHAR(255) NOT NULL,
    isForfait BOOLEAN DEFAULT FALSE,
    quantite INT DEFAULT 1 CHECK (quantite > 0),
    unite VARCHAR(20),
    prix_mission DOUBLE PRECISION CHECK (prix_mission >= 0),
    prix_mission_CID DOUBLE PRECISION CHECK (prix_mission_CID >= 0),
    isSousTraiter BOOLEAN DEFAULT FALSE,
    isMultiDivision BOOLEAN DEFAULT FALSE,
    compte_client DOUBLE PRECISION CHECK (compte_client >= 0),
    part_division_principale DOUBLE PRECISION CHECK (part_division_principale >= 0)
    division_principale INT REFERENCES Division(id_division) ON DELETE CASCADE,
    affaire INT REFERENCES Affaire(id_affaire) ON DELETE SET NULL,
);

-- Table: Facturation
CREATE TABLE Facturation (
    id_facture SERIAL PRIMARY KEY,
    montant_facture DOUBLE PRECISION CHECK (montant_facture >= 0),
    document_facture VARCHAR(255) NOT NULL,
    id_mission INT REFERENCES Mission(id_mission) ON DELETE CASCADE
);

-- Table: Encaissement
CREATE TABLE Encaissement (
    id_encaissement SERIAL PRIMARY KEY,
    montant_encaissement DOUBLE PRECISION CHECK (montant_encaissement >= 0),
    document_encaissement VARCHAR(255) NOT NULL,
    id_mission INT REFERENCES Mission(id_mission) ON DELETE CASCADE
);

-- Table: Avancement_Division
CREATE TABLE Avancement_Division (
    id_mission INT,
    id_division INT,
    rapport TEXT,
    montant_obtenu DOUBLE PRECISION CHECK (montant_obtenu >= 0),
    PRIMARY KEY (id_mission, id_division),
    FOREIGN KEY (id_mission, id_division) REFERENCES Mission_Division(id_mission, id_division) ON DELETE CASCADE
);

-- Table: Mission_Division
CREATE TABLE Mission_Division (
    id_mission INT REFERENCES Mission(id_mission) ON DELETE CASCADE,
    id_division INT REFERENCES Division(id_division) ON DELETE CASCADE,
    part_division DOUBLE PRECISION CHECK (part_division >= 0),
    CONSTRAINT pk_mission_division PRIMARY KEY (id_mission, id_division)
);

-- Table: Partenaire
CREATE TABLE Partenaire (
    id_partenaire SERIAL PRIMARY KEY,
    nom_partenaire VARCHAR(255) NOT NULL
);

-- Table: Mission_Partenaire
CREATE TABLE Mission_Partenaire (
    id_mission INT REFERENCES Mission(id_mission) ON DELETE CASCADE,
    id_partenaire INT REFERENCES Partenaire(id_partenaire) ON DELETE CASCADE,
    part_partenaire DOUBLE PRECISION CHECK (part_partenaire >= 0 AND part_partenaire <= 100),
    PRIMARY KEY (id_mission, id_partenaire)
);

-- Table: Avancement_Partenaire
CREATE TABLE Avancement_Partenaire (
    id_mission INT,
    id_partenaire INT,
    rapport TEXT,
    montant_obtenu DOUBLE PRECISION CHECK (montant_obtenu >= 0),
    PRIMARY KEY (id_mission, id_partenaire),
    FOREIGN KEY (id_mission, id_partenaire) REFERENCES Mission_Partenaire(id_mission, id_partenaire) ON DELETE CASCADE
);

-- Table: Sous_Traitant
CREATE TABLE Sous_Traitant (
    id_soustrait SERIAL PRIMARY KEY,
    nom_soustrait VARCHAR(255) NOT NULL
);

-- Table: Mission_ST
CREATE TABLE Mission_ST (
    id_mission INT REFERENCES Mission(id_mission) ON DELETE CASCADE,
    id_soustrait INT REFERENCES Sous_Traitant(id_soustrait) ON DELETE CASCADE,
    prix_mission_st DOUBLE PRECISION CHECK (prix_mission_st >= 0),
    PRIMARY KEY (id_mission, id_soustrait)
);

-- Table: Avancement_ST
CREATE TABLE Avancement_ST (
    id_mission INT,
    id_soustrait INT,
    rapport TEXT,
    montant_obtenu DOUBLE PRECISION CHECK (montant_obtenu >= 0),
    PRIMARY KEY (id_mission, id_soustrait),
    FOREIGN KEY (id_mission, id_soustrait) REFERENCES Mission_ST(id_mission, id_soustrait) ON DELETE CASCADE
);