BEGIN;

    DROP TABLE IF EXISTS books;

    CREATE TABLE books
    (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        about TEXT,
        added_by VARCHAR(20) NOT NULL
    );

    INSERT INTO books
        (title, author, about, added_by)
    VALUES
        ('Harry Potter', 'JK Rowling', 'Wizards', 'Hettie'),
        ('Educated', 'Tara Westover', 'Survivalist mormons', 'Hettie')
    ;

    COMMIT;