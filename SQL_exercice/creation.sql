CREATE TABLE `station` (
  `station_id` int(11) NOT NULL AUTO_INCREMENT,
  `station_name` varchar(255) DEFAULT NULL,
  `city_id` varchar(50) DEFAULT NULL,
  'longitude' decimal(8,6) DEFAULT NULL,
  `latitude` decimal(8,6)  DEFAULT NULL
  `address` varchar(50) DEFAULT NULL,
  `name_es`varchar(50) DEFAULT NULL,
  `name_fr`varchar(50) DEFAULT NULL,
  `name_it`varchar(50) DEFAULT NULL,
  `name_en`varchar(50) DEFAULT NULL,
CONSTRAINT PK_station PRIMARY KEY (city_id, station_id)
FOREIGN KEY (city_id) REFERENCES city(city_id))


CREATE TABLE 'city' (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  'longitude' decimal(8,6) DEFAULT NULL,
  `latitude` decimal(8,6)  DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `name_es`varchar(50) DEFAULT NULL,
  `name_fr`varchar(50) DEFAULT NULL,
  `name_it`varchar(50) DEFAULT NULL,
  `name_en`varchar(50) DEFAULT NULL,
)
