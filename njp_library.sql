/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 8.0.30 : Database - njp
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`njp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `njp`;

/*Table structure for table `books` */

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `available` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `books` */

insert  into `books`(`id`,`name`,`author`,`year`,`genre`,`available`,`image`) values 
(1,'Lovac u žitu','Jerome David Salinger','1951.','Realizam',5,'https://www.hrlektire.com/wp-content/uploads/2018/09/salinger_lovac_u_zitu-768x1132.jpeg'),
(2,'Braća Karamazovi','Fjodor Mihajlovič Dostojevski','1880.','Fikcija',1,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReugezsa6L7gzZeiCWQm9HQ3HkEiCsRH9rLJQFgDl_fAYsKBr0'),
(5,'Čudnovate zgode šegrta Hlapića','Ivana Brlić Mažuranić','1913.','Dječji roman',7,'https://znanje.hr/product-images/6caa9cf9-ec5f-47fa-8412-efa57cd49c4a.jpg'),
(7,'Starac i more','Ernest Hemingway','1952.','Roman',3,'https://www.njuskalo.hr/image-w920x690/knjige-knjizevnost/starac-more-ernest-hemingway-slika-31715788.jpg'),
(25,'Harry Potter i kamen mudraca','J. K. Rowling','1997.','Fikcija',0,'https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/173971.jpg'),
(26,'Junaci Pavlove ulice','Ferenc Molnar','1906.','Dječji roman',4,'http://www.os-grabrik.hr/wp-content/uploads/6018/Junaci-Pavlove-ulice.jpg');

/*Table structure for table `loans` */

DROP TABLE IF EXISTS `loans`;

CREATE TABLE `loans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) DEFAULT NULL,
  `bookid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `loans` */

/*Table structure for table `locations` */

DROP TABLE IF EXISTS `locations`;

CREATE TABLE `locations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `locations` */

insert  into `locations`(`id`,`name`,`address`,`contact`,`image`) values 
(4,'Gradska knjižnica','Trg žrtava fašizma 31','+385 1 4572 084','https://www.kgz.hr/UserDocsImages//gradska/slike/gradska_knjiznica.jpg?width=110&height=90&mode=stretch&scale=both'),
(5,'Knjižnica Prečko','Slavenskoga 12','+385 1 3882 853','https://www.kgz.hr/UserDocsImages//precko/Knjiznica%202.jpg?width=110&height=90&mode=stretch&scale=both'),
(6,'Knjižnica Sloboština','Karela Zahradnika 8','+385 1 6640 044','https://www.kgz.hr/UserDocsImages//slobostina/08slob.jpg?width=110&height=90&mode=stretch&scale=both'),
(7,'Knjižnica Marije Jurić Zagorke','Krvavi most 2','+385 1 4813 993','https://www.kgz.hr/UserDocsImages//mjzagorke/unnamed.jpg?width=110&height=90&mode=stretch&scale=both');

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `posts` */

insert  into `posts`(`id`,`userid`,`comment`,`image`,`timestamp`) values 
(8,'admin','Otvorena prva knjižnica Lovrić u centru Zagreba!','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg/1200px-Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg','12/02/2023, 12:28:39'),
(9,'admin','Na skladištu su dostupne knjige za posudbu u fizičkom obliku.','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg/1200px-Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg','12/02/2023, 12:29:33'),
(10,'admin','Otvorena druga knjižnica Lovrić na zapadu Zagreba!','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg/1200px-Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg','12/02/2023, 12:30:03'),
(11,'admin','Održavaju se kulturne manifestacije unutar prostora knjižnica Lovrić cijelu veljaču.','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg/1200px-Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg','12/02/2023, 12:31:23');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `admin` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`name`,`email`,`admin`) values 
(8,'admin','$2b$10$tm/.di5XXMQHzhszGV1a/.gC1hJUOkCgcQweq7e1lr8fCX7JRFpVO','admin','admin@tvz.hr',1),
(9,'glovric','$2b$10$nka89dXsZfzluQMgi8nwkOjIyHS8EcYYrWEG0106MhT/VykT4S5Me','Grgo Lovrić','glovric@tvz.hr',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
