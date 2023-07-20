use boot_database;

CREATE TABLE boots(
    id_number serial primary key,
    type_boot varchar(255),
    size_boot int
);
