-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

Drop table if exists dogs;
Drop table if exists campervans;
Drop table if exists food;
Drop table if exists coffee;
Drop table if exists campgrounds;


CREATE table dogs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    breed VARCHAR NOT NULL,
    age INT NOT NULL
);

CREATE table campervans (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    make VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    builder VARCHAR NOT NULL
);

CREATE table food (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    ingredients VARCHAR NOT NULL
);

CREATE table coffee (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    flavor VARCHAR NOT NULL,
    roast VARCHAR NOT NULL
);

CREATE table campgrounds (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    features VARCHAR NOT NULL
);

INSERT INTO dogs (name, breed, age) VALUES
('Kimber', 'Silver Lab', 5),
('Berry', 'Maltese', 10),
('Storm', 'Chocolate Lab', 8),
('Leo', 'Mix', 6);

INSERT INTO campervans (make, model, builder) VALUES
('Mercedes', 'Sprinter', 'custom build'),
('Dodge', 'Promaster', 'Clay (custom builder)'),
('Freightliner', 'Sprinter', 'Kamie and Amanda'),
('Ford', 'Transit', 'Freedom Vans');

INSERT INTO food (name, type, ingredients) VALUES
('Spaghetti', 'Italian', 'Noodles, Meatballs, Sauce'),
('Tacos', 'Mexican', 'Chicken, Tomatos, Cheese'),
('Hamburger', 'American', 'Patty, Veggies, Bun'),
('Jambalaya', 'Cajun', 'Rice, Sausage, Spices');

INSERT INTO coffee (name, flavor, roast) VALUES
('Ethiopia Yirgacheffe', 'Citrus', 'Light Medium'),
('Over Yonder', 'Honey, Blueberry', 'Medium'),
('All Seasons Blend', 'Cherry, Chocolate', 'Medium'),
('The Surge', 'Chocolate, Cream', 'Decaf');

INSERT INTO campgrounds (name, location, features) VALUES
('Champoeg State Park', 'Newberg, OR', 'Volleyball Court'),
('Feyrer Park', 'Mollala, OR', 'River'),
('Barton Campground', 'Boring, OR', 'Playground'),
('Milo McIver State Park', 'Estacada, OR', 'Boat Ramp');