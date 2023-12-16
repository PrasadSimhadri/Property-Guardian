create database project;
use project;


CREATE TABLE IF NOT EXISTS USERREGISTER (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    otp VARCHAR(6) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS USERDATA (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    userName VARCHAR(255) NOT NULL
);

CREATE TABLE Classification (
	SerialNo INT,
    Category VARCHAR(50),
	Location VARCHAR(50),
    StateorUT VARCHAR(50)
); 


CREATE TABLE Main_Data (
    SerialNo INT,
    Category VARCHAR(20),
    Location VARCHAR(50),
    StateorUT VARCHAR(50),
    Value_Stolen_2014 DECIMAL(10, 1),
    Value_Recovered_2014 DECIMAL(10, 1),
    Percentage_Recovery_2014 DECIMAL(5, 1),
    Value_Stolen_2015 DECIMAL(10, 1),
    Value_Recovered_2015 DECIMAL(10, 1),
    Percentage_Recovery_2015 DECIMAL(5, 1),
    Value_Stolen_2016 DECIMAL(10, 1),
    Value_Recovered_2016 DECIMAL(10, 1),
    Percentage_Recovery_2016 DECIMAL(5, 1)
);

CREATE TABLE state_wise (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Stolen_2014 DECIMAL(10, 1),
    Value_Recovered_2014 DECIMAL(10, 1),
    Percentage_Recovery_2014 DECIMAL(5, 1),
    Value_Stolen_2015 DECIMAL(10, 1),
    Value_Recovered_2015 DECIMAL(10, 1),
    Percentage_Recovery_2015 DECIMAL(5, 1),
    Value_Stolen_2016 DECIMAL(10, 1),
    Value_Recovered_2016 DECIMAL(10, 1),
    Percentage_Recovery_2016 DECIMAL(5, 1)
);

CREATE TABLE ut_wise (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Stolen_2014 DECIMAL(10, 1),
    Value_Recovered_2014 DECIMAL(10, 1),
    Percentage_Recovery_2014 DECIMAL(5, 1),
    Value_Stolen_2015 DECIMAL(10, 1),
    Value_Recovered_2015 DECIMAL(10, 1),
    Percentage_Recovery_2015 DECIMAL(5, 1),
    Value_Stolen_2016 DECIMAL(10, 1),
    Value_Recovered_2016 DECIMAL(10, 1),
    Percentage_Recovery_2016 DECIMAL(5, 1)
);

CREATE TABLE data_2014 (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Stolen_2014 DECIMAL(10, 1),
    Value_Recovered_2014 DECIMAL(10, 1),
    Percentage_Recovery_2014 DECIMAL(5, 1)
);

CREATE TABLE data_2015 (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Stolen_2015 DECIMAL(10, 1),
    Value_Recovered_2015 DECIMAL(10, 1),
    Percentage_Recovery_2015 DECIMAL(5, 1)
);

CREATE TABLE data_2016 (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Stolen_2016 DECIMAL(10, 1),
    Value_Recovered_2016 DECIMAL(10, 1),
    Percentage_Recovery_2016 DECIMAL(5, 1)
);


CREATE TABLE Property_Stolen (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Stolen_2014 DECIMAL(10, 1),
    Value_Stolen_2015 DECIMAL(10, 1),
    Value_Stolen_2016 DECIMAL(10, 1)
);


CREATE TABLE Property_Recovered (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Recovered_2014 DECIMAL(10, 1),
    Value_Recovered_2015 DECIMAL(10, 1),
    Value_Recovered_2016 DECIMAL(10, 1)
);


CREATE TABLE Property_RecoveryPercentage (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Percentage_Recovery_2014 DECIMAL(5, 1),
    Percentage_Recovery_2015 DECIMAL(5, 1),
    Percentage_Recovery_2016 DECIMAL(5, 1)
);


CREATE TABLE TotalAnalysis (
    SerialNo INT,
    Category VARCHAR(20),
    StateorUT VARCHAR(50),
    Value_Stolen_2014 DECIMAL(10, 1),
    Value_Recovered_2014 DECIMAL(10, 1),
    Percentage_Recovery_2014 DECIMAL(5, 1),
    Value_Stolen_2015 DECIMAL(10, 1),
    Value_Recovered_2015 DECIMAL(10, 1),
    Percentage_Recovery_2015 DECIMAL(5, 1),
    Value_Stolen_2016 DECIMAL(10, 1),
    Value_Recovered_2016 DECIMAL(10, 1),
    Percentage_Recovery_2016 DECIMAL(5, 1)
);



INSERT INTO USERREGISTER (email, otp, createdAt) VALUES
('user1@example.com', '123456', '2023-01-01 12:00:00'),
('user2@example.com', '654321', '2023-01-02 14:30:00'),
('user3@example.com', '987654', '2023-01-03 09:45:00');

INSERT INTO USERDATA (email, password, userName) VALUES
('user1@example.com', 'hashed_password_1', 'User 1'),
('user2@example.com', 'hashed_password_2', 'User 2'),
('user3@example.com', 'hashed_password_3', 'User 3');


INSERT INTO Classification VALUES
(1, 'State','South', 'Andhra Pradesh'),
(2, 'State', 'East','Arunachal Pradesh'),
(3, 'State', 'East','Assam'),
(4, 'State', 'Central','Bihar'),
(5, 'State','Central', 'Chhattisgarh'),
(6, 'State','West', 'Goa'),
(7, 'State',' West', 'Gujarat'),
(8, 'State', 'North','Haryana'),
(9, 'State', 'North','Himachal Pradesh'),
(10, 'State','North', 'Jammu and Kashmir'),
(11, 'State','East', 'Jharkhand'),
(12, 'State','South', 'Karnataka'),
(13, 'State','South', 'Kerala'),
(14, 'State','Central', 'Madhya Pradesh'),
(15, 'State','West', 'Maharashtra'),
(16, 'State','East', 'Manipur'),
(17, 'State','East', 'Meghalaya'),
(18, 'State','East', 'Mizoram'),
(19, 'State','East', 'Nagaland'),
(20, 'State','Central', 'Odisha'),
(21, 'State','North', 'Punjab'),
(22, 'State','West', 'Rajasthan'),
(23, 'State','East', 'Sikkim'),
(24, 'State','South', 'Tamil Nadu'),
(25, 'State','Southl', 'Telangana'),
(26, 'State','East', 'Tripura'),
(27, 'State','Central', 'Uttar Pradesh'),
(28, 'State','North', 'Uttarakhand'),
(29, 'State','Central', 'West Bengal'),
(30, 'UT','South', 'Andaman and Nicobar Islands'),
(31, 'UT','Nort', 'Chandigarh'),
(32, 'UT','West', 'Dadra and Nagar Haveli'),
(33, 'UT','West', 'Daman and Diu'),
(34, 'UT','North', 'Delhi'),
(35, 'UT','South', 'Lakshadweep'),
(36, 'UT','South', 'Puducherry');


INSERT INTO Main_Data VALUES
(1, 'State','South', 'Andhra Pradesh', 114, 49.7, 43.6, 121.1, 55.2, 45.6, 113.2, 46.5, 41.1),
(2, 'State','East', 'Arunachal Pradesh', 12.6, 2.3, 18, 16.3, 6.8, 41.5, 12.9, 2.2, 17.2),
(3, 'State','East', 'Assam', 48.1, 11.5, 23.8, 81.7, 11.1, 13.6, 94.2, 19.5, 20.7),
(4, 'State','Central', 'Bihar', 136.8, 17.7, 13, 120.3, 17, 14.2, 100.2, 19.8, 19.8),
(5, 'State','Central', 'Chhattisgarh', 140, 18.1, 12.9, 46.3, 18.6, 40.2, 43.1, 14.5, 33.7),
(6, 'State','West', 'Goa', 46.4, 8.1, 17.5, 7.6, 1.5, 19.8, 9.3, 2.1, 22.7),
(7, 'State','West', 'Gujarat', 504.4, 119.8, 23.7, 271.9, 54.4, 20, 207.6, 63, 30.3),
(8, 'State','North', 'Haryana', 188, 69.4, 36.9, 169.2, 61.8, 36.5, 261.5, 76.8, 29.4),
(9, 'State','North', 'Himachal Pradesh', 33.1, 12.6, 38.1, 15, 5.7, 38.1, 19.6, 8.6, 44),
(10, 'State','North', 'Jammu and Kashmir', 21, 9.9, 47, 25.6, 9.7, 37.7, 25, 11.3, 45.1),
(11, 'State','East', 'Jharkhand', 46.4, 6.9, 14.8, 33.8, 7.9, 23.3, 27.9, 5.9, 21.2),
(12, 'State','South', 'Karnataka', 285.6, 95.4, 33.4, 267.7, 104, 38.9, 276.6, 105.3, 38.1),
(13, 'State','South', 'Kerala', 141.9, 21.4, 15.1, 96.3, 25.5, 26.5, 83.1, 18.2, 22),
(14, 'State','Central', 'Madhya Pradesh', 188.6, 66.1, 35, 287.5, 73.5, 25.6, 236.7, 72.6, 30.7),
(15, 'State','West', 'Maharashtra', 2944.1, 309.5, 10.5, 4533.9, 232, 5.1, 3371.3, 266.9, 7.9),
(16, 'State','East', 'Manipur', 7.9, 0.5, 6.9, 10.8, 1.5, 14.3, 8.6, 3, 35),
(17, 'State','East', 'Meghalaya', 15.6, 1.3, 8.3, 56.5, 3, 5.3, 15, 1.7, 11.4),
(18, 'State','East', 'Mizoram', 10.1, 3.9, 38.5, 11.8, 3.9, 32.9, 8.9, 3.5, 39.3),
(19, 'State','East', 'Nagaland', 10, 0.8, 8.3, 13, 2.5, 18.8, 8.1, 1.9, 23.2),
(20, 'State','Central', 'Odisha', 202.4, 33.9, 16.7, 111.4, 35, 31.4, 111.3, 28.4, 25.5),
(21, 'State','North', 'Punjab', 102.9, 45.8, 44.5, 105.7, 59.4, 56.2, 106, 38.8, 36.6),
(22, 'State','West', 'Rajasthan', 250.9, 135, 53.8, 259.4, 136.3, 52.5, 240.1, 131.4, 54.7),
(23, 'State','East', 'Sikkim', 1.7, 0.6, 37.9, 2.5, 0.9, 35.1, 1.9, 0.8, 40.1),
(24, 'State','South', 'Tamil Nadu', 150.8, 99.5, 66, 131.2, 85.8, 65.4, 136.9, 91.5, 66.9),
(25, 'State','South', 'Telangana', 155.4, 91.9, 59.1, 98.3, 56.8, 57.8, 113.6, 60.9, 53.7),
(26, 'State','East', 'Tripura', 5.5, 1.5, 26.9, 65, 1, 1.5, 2.4, 0.7, 29.8),
(27, 'State','Central', 'Uttar Pradesh', 315.2, 103.3, 32.8, 296.4, 104.5, 35.3, 630.1, 167.7, 26.6),
(28, 'State','North', 'Uttarakhand', 15, 7, 46.5, 11.3, 5.4, 47.8, 13.3, 7.2, 54),
(29, 'State', 'Central','West Bengal', 736.9, 190.4, 25.8, 199.9, 31.9, 16, 158.4, 24.7, 15.6),
(30, 'UT','South', 'Andaman and Nicobar Islands', 5.4, 0.4, 6.6, 2.2, 1.7, 77, 0.8, 0.3, 37.3),
(31, 'UT','North', 'Chandigarh', 9.8, 4.2, 42.3, 9.1, 4.6, 51.2, 8, 2.8, 34.8),
(32, 'UT','West', 'Dadra and Nagar Haveli', 5.1, 0.5, 10.1, 5.1, 2.6, 51.3, 4.2, 1.4, 33.1),
(33, 'UT','West', 'Daman and Diu', 1, 0.3, 29, 2.3, 0.5, 20.9, 1.1, 0.6, 54.7),
(34, 'UT','North', 'Delhi', 658.6, 34.3, 5.2, 719.9, 126, 17.5, 3278.8, 157, 4.8),
(35, 'UT','South', 'Lakshadweep', 0.1, 0, 13.4, 0, 0, 0, 0, 0, 0),
(36, 'UT','South', 'Puducherry', 3.6, 2.2, 62.1, 4.3, 2.2, 51.3, 3.6, 1.4, 40.1),
(37, 'Total (States)','None', 'State', 6831.3, 1533.7, 22.5, 7467.5, 1212.5, 16.2, 6436.6, 1295.5, 20.1),
(38, 'Total (UTs)','None', 'UT', 683.5, 41.9, 6.1, 742.9, 137.7, 18.5, 3296.4, 163.5, 5),
(39, 'Total (All-India)','None', 'Total (All-India)', 7514.8, 1575.5, 21, 8210.4, 1350.2, 16.4, 9733.1, 1459, 15);

		
INSERT INTO state_wise VALUES
(1, 'State', 'Andhra Pradesh', 114, 49.7, 43.6, 121.1, 55.2, 45.6, 113.2, 46.5, 41.1),
(2, 'State', 'Arunachal Pradesh', 12.6, 2.3, 18, 16.3, 6.8, 41.5, 12.9, 2.2, 17.2),
(3, 'State', 'Assam', 48.1, 11.5, 23.8, 81.7, 11.1, 13.6, 94.2, 19.5, 20.7),
(4, 'State', 'Bihar', 136.8, 17.7, 13, 120.3, 17, 14.2, 100.2, 19.8, 19.8),
(5, 'State', 'Chhattisgarh', 140, 18.1, 12.9, 46.3, 18.6, 40.2, 43.1, 14.5, 33.7),
(6, 'State', 'Goa', 46.4, 8.1, 17.5, 7.6, 1.5, 19.8, 9.3, 2.1, 22.7),
(7, 'State', 'Gujarat', 504.4, 119.8, 23.7, 271.9, 54.4, 20, 207.6, 63, 30.3),
(8, 'State', 'Haryana', 188, 69.4, 36.9, 169.2, 61.8, 36.5, 261.5, 76.8, 29.4),
(9, 'State', 'Himachal Pradesh', 33.1, 12.6, 38.1, 15, 5.7, 38.1, 19.6, 8.6, 44),
(10, 'State', 'Jammu and Kashmir', 21, 9.9, 47, 25.6, 9.7, 37.7, 25, 11.3, 45.1),
(11, 'State', 'Jharkhand', 46.4, 6.9, 14.8, 33.8, 7.9, 23.3, 27.9, 5.9, 21.2),
(12, 'State', 'Karnataka', 285.6, 95.4, 33.4, 267.7, 104, 38.9, 276.6, 105.3, 38.1),
(13, 'State', 'Kerala', 141.9, 21.4, 15.1, 96.3, 25.5, 26.5, 83.1, 18.2, 22),
(14, 'State', 'Madhya Pradesh', 188.6, 66.1, 35, 287.5, 73.5, 25.6, 236.7, 72.6, 30.7),
(15, 'State', 'Maharashtra', 2944.1, 309.5, 10.5, 4533.9, 232, 5.1, 3371.3, 266.9, 7.9),
(16, 'State', 'Manipur', 7.9, 0.5, 6.9, 10.8, 1.5, 14.3, 8.6, 3, 35),
(17, 'State', 'Meghalaya', 15.6, 1.3, 8.3, 56.5, 3, 5.3, 15, 1.7, 11.4),
(18, 'State', 'Mizoram', 10.1, 3.9, 38.5, 11.8, 3.9, 32.9, 8.9, 3.5, 39.3),
(19, 'State', 'Nagaland', 10, 0.8, 8.3, 13, 2.5, 18.8, 8.1, 1.9, 23.2),
(20, 'State', 'Odisha', 202.4, 33.9, 16.7, 111.4, 35, 31.4, 111.3, 28.4, 25.5),
(21, 'State', 'Punjab', 102.9, 45.8, 44.5, 105.7, 59.4, 56.2, 106, 38.8, 36.6),
(22, 'State', 'Rajasthan', 250.9, 135, 53.8, 259.4, 136.3, 52.5, 240.1, 131.4, 54.7),
(23, 'State', 'Sikkim', 1.7, 0.6, 37.9, 2.5, 0.9, 35.1, 1.9, 0.8, 40.1),
(24, 'State', 'Tamil Nadu', 150.8, 99.5, 66, 131.2, 85.8, 65.4, 136.9, 91.5, 66.9),
(25, 'State', 'Telangana', 155.4, 91.9, 59.1, 98.3, 56.8, 57.8, 113.6, 60.9, 53.7),
(26, 'State', 'Tripura', 5.5, 1.5, 26.9, 65, 1, 1.5, 2.4, 0.7, 29.8),
(27, 'State', 'Uttar Pradesh', 315.2, 103.3, 32.8, 296.4, 104.5, 35.3, 630.1, 167.7, 26.6),
(28, 'State', 'Uttarakhand', 15, 7, 46.5, 11.3, 5.4, 47.8, 13.3, 7.2, 54),
(29, 'State', 'West Bengal', 736.9, 190.4, 25.8, 199.9, 31.9, 16, 158.4, 24.7, 15.6);


INSERT INTO ut_wise VALUES
(30, 'UT', 'Andaman and Nicobar Islands', 5.4, 0.4, 6.6, 2.2, 1.7, 77, 0.8, 0.3, 37.3),
(31, 'UT', 'Chandigarh', 9.8, 4.2, 42.3, 9.1, 4.6, 51.2, 8, 2.8, 34.8),
(32, 'UT', 'Dadra and Nagar Haveli', 5.1, 0.5, 10.1, 5.1, 2.6, 51.3, 4.2, 1.4, 33.1),
(33, 'UT', 'Daman and Diu', 1, 0.3, 29, 2.3, 0.5, 20.9, 1.1, 0.6, 54.7),
(34, 'UT', 'Delhi', 658.6, 34.3, 5.2, 719.9, 126, 17.5, 3278.8, 157, 4.8),
(35, 'UT', 'Lakshadweep', 0.1, 0, 13.4, 0, 0, 0, 0, 0, 0),
(36, 'UT', 'Puducherry', 3.6, 2.2, 62.1, 4.3, 2.2, 51.3, 3.6, 1.4, 40.1);


INSERT INTO data_2014 VALUES
(1, 'State', 'Andhra Pradesh', 114, 49.7, 43.6),
(2, 'State', 'Arunachal Pradesh', 12.6, 2.3, 18),
(3, 'State', 'Assam', 48.1, 11.5, 23.8),
(4, 'State', 'Bihar', 136.8, 17.7, 13),
(5, 'State', 'Chhattisgarh', 140, 18.1, 12.9),
(6, 'State', 'Goa', 46.4, 8.1, 17.5),
(7, 'State', 'Gujarat', 504.4, 119.8, 23.7),
(8, 'State', 'Haryana', 188, 69.4, 36.9),
(9, 'State', 'Himachal Pradesh', 33.1, 12.6, 38.1),
(10, 'State', 'Jammu and Kashmir', 21, 9.9, 47),
(11, 'State', 'Jharkhand', 46.4, 6.9, 14.8),
(12, 'State', 'Karnataka', 285.6, 95.4, 33.4),
(13, 'State', 'Kerala', 141.9, 21.4, 15.1),
(14, 'State', 'Madhya Pradesh', 188.6, 66.1, 35),
(15, 'State', 'Maharashtra', 2944.1, 309.5, 10.5),
(16, 'State', 'Manipur', 7.9, 0.5, 6.9),
(17, 'State', 'Meghalaya', 15.6, 1.3, 8.3),
(18, 'State', 'Mizoram', 10.1, 3.9, 38.5),
(19, 'State', 'Nagaland', 10, 0.8, 8.3),
(20, 'State', 'Odisha', 202.4, 33.9, 16.7),
(21, 'State', 'Punjab', 102.9, 45.8, 44.5),
(22, 'State', 'Rajasthan', 250.9, 135, 53.8),
(23, 'State', 'Sikkim', 1.7, 0.6, 37.9),
(24, 'State', 'Tamil Nadu', 150.8, 99.5, 66),
(25, 'State', 'Telangana', 155.4, 91.9, 59.1),
(26, 'State', 'Tripura', 5.5, 1.5, 26.9),
(27, 'State', 'Uttar Pradesh', 315.2, 103.3, 32.8),
(28, 'State', 'Uttarakhand', 15, 7, 46.5),
(29, 'State', 'West Bengal', 736.9, 190.4, 25.8),
(30, 'UT', 'Andaman and Nicobar Islands', 5.4, 0.4, 6.6),
(31, 'UT', 'Chandigarh', 9.8, 4.2, 42.3),
(32, 'UT', 'Dadra and Nagar Haveli', 5.1, 0.5, 10.1),
(33, 'UT', 'Daman and Diu', 1, 0.3, 29),
(34, 'UT', 'Delhi', 658.6, 34.3, 5.2),
(35, 'UT', 'Lakshadweep', 0.1, 0, 13.4),
(36, 'UT', 'Puducherry', 3.6, 2.2, 62.1);


INSERT INTO data_2015 VALUES
(1, 'State', 'Andhra Pradesh', 121.1, 55.2, 45.6),
(2, 'State', 'Arunachal Pradesh', 16.3, 6.8, 41.5),
(3, 'State', 'Assam', 81.7, 11.1, 13.6),
(4, 'State', 'Bihar', 120.3, 17, 14.2),
(5, 'State', 'Chhattisgarh', 46.3, 18.6, 40.2),
(6, 'State', 'Goa', 7.6, 1.5, 19.8),
(7, 'State', 'Gujarat', 271.9, 54.4, 20),
(8, 'State', 'Haryana', 169.2, 61.8, 36.5),
(9, 'State', 'Himachal Pradesh', 15, 5.7, 38.1),
(10, 'State', 'Jammu and Kashmir', 25.6, 9.7, 37.7),
(11, 'State', 'Jharkhand', 33.8, 7.9, 23.3),
(12, 'State', 'Karnataka', 267.7, 104, 38.9),
(13, 'State', 'Kerala', 96.3, 25.5, 26.5),
(14, 'State', 'Madhya Pradesh', 287.5, 73.5, 25.6),
(15, 'State', 'Maharashtra', 4533.9, 232, 5.1),
(16, 'State', 'Manipur', 10.8, 1.5, 14.3),
(17, 'State', 'Meghalaya', 56.5, 3, 5.3),
(18, 'State', 'Mizoram', 11.8, 3.9, 32.9),
(19, 'State', 'Nagaland', 13, 2.5, 18.8),
(20, 'State', 'Odisha', 111.4, 35, 31.4),
(21, 'State', 'Punjab', 105.7, 59.4, 56.2),
(22, 'State', 'Rajasthan', 259.4, 136.3, 52.5),
(23, 'State', 'Sikkim', 2.5, 0.9, 35.1),
(24, 'State', 'Tamil Nadu', 131.2, 85.8, 65.4),
(25, 'State', 'Telangana', 98.3, 56.8, 57.8),
(26, 'State', 'Tripura', 65, 1, 1.5),
(27, 'State', 'Uttar Pradesh', 296.4, 104.5, 35.3),
(28, 'State', 'Uttarakhand', 11.3, 5.4, 47.8),
(29, 'State', 'West Bengal', 199.9, 31.9, 16),
(30, 'UT', 'Andaman and Nicobar Islands', 2.2, 1.7, 77),
(31, 'UT', 'Chandigarh', 9.1, 4.6, 51.2),
(32, 'UT', 'Dadra and Nagar Haveli', 5.1, 2.6, 51.3),
(33, 'UT', 'Daman and Diu', 2.3, 0.5, 20.9),
(34, 'UT', 'Delhi', 719.9, 126, 17.5),
(35, 'UT', 'Lakshadweep', 0, 0, 0),
(36, 'UT', 'Puducherry', 4.3, 2.2, 51.3);


INSERT INTO data_2016 VALUES
(1, 'State', 'Andhra Pradesh', 113.2, 46.5, 41.1),
(2, 'State', 'Arunachal Pradesh', 12.9, 2.2, 17.2),
(3, 'State', 'Assam', 94.2, 19.5, 20.7),
(4, 'State', 'Bihar', 100.2, 19.8, 19.8),
(5, 'State', 'Chhattisgarh', 43.1, 14.5, 33.7),
(6, 'State', 'Goa', 9.3, 2.1, 22.7),
(7, 'State', 'Gujarat', 207.6, 63, 30.3),
(8, 'State', 'Haryana', 261.5, 76.8, 29.4),
(9, 'State', 'Himachal Pradesh', 19.6, 8.6, 44),
(10, 'State', 'Jammu and Kashmir', 25, 11.3, 45.1),
(11, 'State', 'Jharkhand', 27.9, 5.9, 21.2),
(12, 'State', 'Karnataka', 276.6, 105.3, 38.1),
(13, 'State', 'Kerala', 83.1, 18.2, 22),
(14, 'State', 'Madhya Pradesh', 236.7, 72.6, 30.7),
(15, 'State', 'Maharashtra', 3371.3, 266.9, 7.9),
(16, 'State', 'Manipur', 8.6, 3, 35),
(17, 'State', 'Meghalaya', 15, 1.7, 11.4),
(18, 'State', 'Mizoram', 8.9, 3.5, 39.3),
(19, 'State', 'Nagaland', 8.1, 1.9, 23.2),
(20, 'State', 'Odisha', 111.3, 28.4, 25.5),
(21, 'State', 'Punjab', 106, 38.8, 36.6),
(22, 'State', 'Rajasthan', 240.1, 131.4, 54.7),
(23, 'State', 'Sikkim', 1.9, 0.8, 40.1),
(24, 'State', 'Tamil Nadu', 136.9, 91.5, 66.9),
(25, 'State', 'Telangana', 113.6, 60.9, 53.7),
(26, 'State', 'Tripura', 2.4, 0.7, 29.8),
(27, 'State', 'Uttar Pradesh', 630.1, 167.7, 26.6),
(28, 'State', 'Uttarakhand', 13.3, 7.2, 54),
(29, 'State', 'West Bengal', 158.4, 24.7, 15.6),
(30, 'UT', 'Andaman and Nicobar Islands', 0.8, 0.3, 37.3),
(31, 'UT', 'Chandigarh', 8, 2.8, 34.8),
(32, 'UT', 'Dadra and Nagar Haveli', 4.2, 1.4, 33.1),
(33, 'UT', 'Daman and Diu', 1.1, 0.6, 54.7),
(34, 'UT', 'Delhi', 3278.8, 157, 4.8),
(35, 'UT', 'Lakshadweep', 0, 0, 0),
(36, 'UT', 'Puducherry', 3.6, 1.4, 40.1);


INSERT INTO Property_Stolen VALUES
(1, 'State', 'Andhra Pradesh', 114, 121.1, 113.2),
(2, 'State', 'Arunachal Pradesh', 12.6, 16.3, 12.9),
(3, 'State', 'Assam', 48.1, 81.7, 94.2),
(4, 'State', 'Bihar', 136.8, 120.3, 100.2),
(5, 'State', 'Chhattisgarh', 140, 46.3, 43.1),
(6, 'State', 'Goa', 46.4, 7.6, 9.3),
(7, 'State', 'Gujarat', 504.4, 271.9, 207.6),
(8, 'State', 'Haryana', 188, 169.2, 261.5),
(9, 'State', 'Himachal Pradesh', 33.1, 15, 19.6),
(10, 'State', 'Jammu and Kashmir', 21, 25.6, 25),
(11, 'State', 'Jharkhand', 46.4, 33.8, 27.9),
(12, 'State', 'Karnataka', 285.6, 267.7, 276.6),
(13, 'State', 'Kerala', 141.9, 96.3, 83.1),
(14, 'State', 'Madhya Pradesh', 188.6, 287.5, 236.7),
(15, 'State', 'Maharashtra', 2944.1, 4533.9, 3371.3),
(16, 'State', 'Manipur', 7.9, 10.8, 8.6),
(17, 'State', 'Meghalaya', 15.6, 56.5, 15),
(18, 'State', 'Mizoram', 10.1, 11.8, 8.9),
(19, 'State', 'Nagaland', 10, 13, 8.1),
(20, 'State', 'Odisha', 202.4, 111.4, 111.3),
(21, 'State', 'Punjab', 102.9, 105.7, 106),
(22, 'State', 'Rajasthan', 250.9, 259.4, 240.1),
(23, 'State', 'Sikkim', 1.7, 2.5, 1.9),
(24, 'State', 'Tamil Nadu', 150.8, 131.2, 136.9),
(25, 'State', 'Telangana', 155.4, 98.3, 113.6),
(26, 'State', 'Tripura', 5.5, 65, 2.4),
(27, 'State', 'Uttar Pradesh', 315.2, 296.4, 630.1),
(28, 'State', 'Uttarakhand', 15, 11.3, 13.3),
(29, 'State', 'West Bengal', 736.9, 199.9, 158.4),
(30, 'UT', 'Andaman and Nicobar Islands', 5.4, 2.2, 0.8),
(31, 'UT', 'Chandigarh', 9.8, 9.1, 8),
(32, 'UT', 'Dadra and Nagar Haveli', 5.1, 5.1, 4.2),
(33, 'UT', 'Daman and Diu', 1, 2.3, 1.1),
(34, 'UT', 'Delhi', 658.6, 719.9, 3278.8),
(35, 'UT', 'Lakshadweep', 0.1, 0, 0),
(36, 'UT', 'Puducherry', 3.6, 4.3, 3.6);



INSERT INTO Property_Recovered VALUES
(1, 'State', 'Andhra Pradesh', 49.7, 55.2, 46.5),
(2, 'State', 'Arunachal Pradesh', 2.3, 6.8, 2.2),
(3, 'State', 'Assam', 11.5, 11.1, 19.5),
(4, 'State', 'Bihar', 17.7, 17, 19.8),
(5, 'State', 'Chhattisgarh', 18.1, 18.6, 14.5),
(6, 'State', 'Goa', 8.1, 1.5, 2.1),
(7, 'State', 'Gujarat', 119.8, 54.4, 63),
(8, 'State', 'Haryana', 69.4, 61.8, 76.8),
(9, 'State', 'Himachal Pradesh', 12.6, 5.7, 8.6),
(10, 'State', 'Jammu and Kashmir', 9.9, 9.7, 11.3),
(11, 'State', 'Jharkhand', 6.9, 7.9, 5.9),
(12, 'State', 'Karnataka', 95.4, 104, 105.3),
(13, 'State', 'Kerala', 21.4, 25.5, 18.2),
(14, 'State', 'Madhya Pradesh', 66.1, 73.5, 72.6),
(15, 'State', 'Maharashtra', 309.5, 232, 266.9),
(16, 'State', 'Manipur', 0.5, 1.5, 3),
(17, 'State', 'Meghalaya', 1.3, 3, 1.7),
(18, 'State', 'Mizoram', 3.9, 3.9, 3.5),
(19, 'State', 'Nagaland', 0.8, 2.5, 1.9),
(20, 'State', 'Odisha', 33.9, 35, 28.4),
(21, 'State', 'Punjab', 45.8, 59.4, 38.8),
(22, 'State', 'Rajasthan', 135, 136.3, 131.4),
(23, 'State', 'Sikkim', 0.6, 0.9, 0.8),
(24, 'State', 'Tamil Nadu', 99.5, 85.8, 91.5),
(25, 'State', 'Telangana', 91.9, 56.8, 60.9),
(26, 'State', 'Tripura', 1.5, 1, 0.7),
(27, 'State', 'Uttar Pradesh', 103.3, 104.5, 167.7),
(28, 'State', 'Uttarakhand', 7, 5.4, 7.2),
(29, 'State', 'West Bengal', 190.4, 31.9, 24.7),
(30, 'UT', 'Andaman and Nicobar Islands', 0.4, 1.7, 0.3),
(31, 'UT', 'Chandigarh', 4.2, 4.6, 2.8),
(32, 'UT', 'Dadra and Nagar Haveli', 0.5, 2.6, 1.4),
(33, 'UT', 'Daman and Diu', 0.3, 0.5, 0.6),
(34, 'UT', 'Delhi', 34.3, 126, 157),
(35, 'UT', 'Lakshadweep', 0, 0, 0),
(36, 'UT', 'Puducherry', 2.2, 2.2, 1.4);


INSERT INTO Property_RecoveryPercentage VALUES
(1, 'State', 'Andhra Pradesh', 43.6, 45.6, 41.1),
(2, 'State', 'Arunachal Pradesh', 18, 41.5, 17.2),
(3, 'State', 'Assam', 23.8, 13.6, 20.7),
(4, 'State', 'Bihar', 13, 14.2, 19.8),
(5, 'State', 'Chhattisgarh', 12.9, 40.2, 33.7),
(6, 'State', 'Goa', 17.5, 19.8, 22.7),
(7, 'State', 'Gujarat', 23.7, 20, 30.3),
(8, 'State', 'Haryana', 36.9, 36.5, 29.4),
(9, 'State', 'Himachal Pradesh', 38.1, 38.1, 44),
(10, 'State', 'Jammu and Kashmir', 47, 37.7, 45.1),
(11, 'State', 'Jharkhand', 14.8, 23.3, 21.2),
(12, 'State', 'Karnataka', 33.4, 38.9, 38.1),
(13, 'State', 'Kerala', 15.1, 26.5, 22),
(14, 'State', 'Madhya Pradesh', 35, 25.6, 30.7),
(15, 'State', 'Maharashtra', 10.5, 5.1, 7.9),
(16, 'State', 'Manipur', 6.9, 14.3, 35),
(17, 'State', 'Meghalaya', 8.3, 5.3, 11.4),
(18, 'State', 'Mizoram', 38.5, 32.9, 39.3),
(19, 'State', 'Nagaland', 8.3, 18.8, 23.2),
(20, 'State', 'Odisha', 16.7, 31.4, 25.5),
(21, 'State', 'Punjab', 44.5, 56.2, 36.6),
(22, 'State', 'Rajasthan', 53.8, 52.5, 54.7),
(23, 'State', 'Sikkim', 37.9, 35.1, 40.1),
(24, 'State', 'Tamil Nadu', 66, 65.4, 66.9),
(25, 'State', 'Telangana', 59.1, 57.8, 53.7),
(26, 'State', 'Tripura', 26.9, 1.5, 29.8),
(27, 'State', 'Uttar Pradesh', 32.8, 35.3, 26.6),
(28, 'State', 'Uttarakhand', 46.5, 47.8, 54),
(29, 'State', 'West Bengal', 25.8, 16, 15.6),
(30, 'UT', 'Andaman and Nicobar Islands', 6.6, 77, 37.3),
(31, 'UT', 'Chandigarh', 42.3, 51.2, 34.8),
(32, 'UT', 'Dadra and Nagar Haveli', 10.1, 51.3, 33.1),
(33, 'UT', 'Daman and Diu', 29, 20.9, 54.7),
(34, 'UT', 'Delhi', 5.2, 17.5, 4.8),
(35, 'UT', 'Lakshadweep', 13.4, 0, 0),
(36, 'UT', 'Puducherry', 62.1, 51.3, 40.1);


INSERT INTO TotalAnalysis VALUES
(1, 'State', 'Total (States)', 6831.3, 1533.7, 22.5, 7467.5, 1212.5, 16.2, 6436.6, 1295.5, 20.1),
(2, 'UT', 'Total (UTs)', 683.5, 41.9, 6.1, 742.9, 137.7, 18.5, 3296.4, 163.5, 5),
(3, 'Total (All-India)', 'Total (All-India)', 7514.8, 1575.5, 21, 8210.4, 1350.2, 16.4, 9733.1, 1459, 15);

SET SQL_SAFE_UPDATES = 0;


ALTER USER 'root'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'Prasad@664';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'Prasad@664';

