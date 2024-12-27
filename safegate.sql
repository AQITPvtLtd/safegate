-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 07:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `safegate`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `short_name` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `tags` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `img_alt_tag` varchar(200) NOT NULL,
  `meta_title` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `short_name`, `image`, `description`, `date`, `tags`, `url`, `img_alt_tag`, `meta_title`) VALUES
(1, 'The Silent Killer: Understanding Thyroid Cancer', 'The Silent Killer', 'thyroidcancer.jpg', '<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(40, 50, 78);\">Thyroid cancer is a disease that often flies under the radar, yet it affects thousands of people worldwide every year. It develops in the thyroid gland, a small, butterfly-shaped gland located in the neck that produces hormones regulating growth, development, and metabolism. This makes the thyroid gland vital for our overall health. For those seeking&nbsp;</span><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(44, 130, 201);\"><a href=\"https://www.safegatemedicalcenter.com/contact\"><strong>the Best Thyroid Cancer Treatment in India</strong></a></span><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(40, 50, 78);\">, understanding this condition is essential.</span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><br></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"color: rgb(40, 50, 78); font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 20px;\">What are the Types of Thyroid Cancer?</span></strong></span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(40, 50, 78);\">There are several types of thyroid cancer, each with its own unique characteristics and treatment options. The most common types include:</span></p>\r\n<ul style=\"list-style-type: disc;\">\r\n    <li style=\"font-size: 18px; color: rgb(0, 0, 0); font-family: Calibri, sans-serif;\"><strong>Papillary Thyroid Cancer</strong>: Accounting for about 80% of all cases, this is the most common type. It typically grows slowly and can be treated with surgery and radioactive iodine therapy, often leading to positive outcomes.</li>\r\n    <li style=\"font-size: 18px; color: rgb(0, 0, 0); font-family: Calibri, sans-serif;\"><strong>Follicular Thyroid Cancer</strong>: This type is less common than papillary but still relatively slow-growing. It is also treatable with surgery and radioactive iodine therapy.</li>\r\n    <li style=\"font-size: 18px; color: rgb(0, 0, 0); font-family: Calibri, sans-serif;\"><strong>Medullary Thyroid Cancer</strong>: More aggressive than the first two types, it may require surgery, chemotherapy, and radiation therapy for effective treatment.</li>\r\n    <li style=\"font-size: 18px; color: rgb(0, 0, 0); font-family: Calibri, sans-serif;\"><strong>Anaplastic Thyroid Cancer</strong>: The most aggressive type, it has a poor prognosis and can be managed through surgery, chemotherapy, and radiation therapy.</li>\r\n</ul>\r\n<p><br></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"color: rgb(40, 50, 78); font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 20px;\">What are the Symptoms of Thyroid Cancer?</span></strong></span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(40, 50, 78);\">Symptoms of thyroid cancer can be subtle and may not appear until the cancer has advanced. Common symptoms include:</span></p>\r\n<ul type=\"disc\" style=\"margin-bottom: 0in; list-style-type: disc;\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>A Lump or Swelling in the Neck</strong>: Often the first sign, this lump may be painless and grow slowly over time.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Difficulty Swallowing</strong>: As the tumor grows, it can compress the esophagus, leading to swallowing difficulties.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Hoarseness or Voice Changes</strong>: The tumor can also affect the vocal cords, resulting in hoarseness or changes in voice.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Fatigue</strong>: Thyroid cancer can cause fatigue, which might be mistaken for other conditions.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Weight Loss</strong>: Unexplained weight loss can also signal thyroid cancer.</li>\r\n</ul>\r\n<p><br></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"color: rgb(40, 50, 78); font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 20px;\">What are the Causes and Risk Factors of Thyroid Cancer?</span></strong></span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(40, 50, 78);\">While the exact causes of thyroid cancer are not fully understood, several risk factors can increase the likelihood of developing the disease:</span></p>\r\n<ul type=\"disc\" style=\"margin-bottom: 0in; list-style-type: disc;\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Genetics</strong>: A family history of thyroid cancer can significantly increase a person&apos;s risk.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Radiation Exposure</strong>: Exposure to radiation, particularly during childhood, can elevate the risk of thyroid cancer.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Thyroid Nodules</strong>: Abnormal growths on the thyroid gland can increase the risk of thyroid cancer.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Iodine Deficiency</strong>: A diet lacking in iodine can also contribute to the risk of developing this disease.</li>\r\n</ul>\r\n<p><br></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"color: rgb(40, 50, 78); font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 20px;\">How is Thyroid Cancer Diagnosed?</span></strong></span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(40, 50, 78);\">Thyroid cancer is typically diagnosed through a combination of physical examination, imaging tests, and biopsy. The diagnostic process may include:</span></p>\r\n<ul type=\"disc\" style=\"margin-bottom: 0in; list-style-type: disc;\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Physical Examination</strong>: A doctor checks for any abnormalities in the neck.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Imaging Tests</strong>: Ultrasound, CT scans, and MRI scans can help identify any irregularities in the thyroid gland.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Biopsy</strong>: A biopsy involves removing a tissue sample from the thyroid gland to check for cancer cells.</li>\r\n</ul>\r\n<p><br></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"color: rgb(40, 50, 78); font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 20px;\">How is Thyroid Cancer Treated?</span></strong></span></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(40, 50, 78);\">The treatment of thyroid cancer depends on the type and stage of the disease. Options may include:</span></p>\r\n<ul type=\"disc\" style=\"margin-bottom: 0in; list-style-type: disc;\">\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Surgery</strong>: Often the primary treatment, the type of surgery depends on the tumor&apos;s size and location. For the <strong>Best Thyroid Cancer Treatment in India</strong>, seeking expert surgical intervention is crucial.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Radioactive Iodine Therapy</strong>: This treatment uses radioactive iodine to target and kill cancer cells effectively.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Chemotherapy</strong>: More aggressive types of thyroid cancer may require chemotherapy as part of the treatment plan.</li>\r\n    <li style=\"margin: 0in 0in 8pt; font-size: 18px; font-family: Calibri, sans-serif; line-height: normal; color: rgb(0, 0, 0);\"><strong>Radiation Therapy</strong>: This may be employed for thyroid cancer that has spread to other parts of the body.</li>\r\n</ul>\r\n<p><br></p>\r\n<p style=\'margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:\"Calibri\",sans-serif;line-height:normal;\'><span style=\"color: rgb(40, 50, 78); font-family: Calibri, sans-serif;\"><strong><span style=\"font-size: 20px;\">Overall Summary</span></strong></span></p>\r\n<p><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(0, 0, 0);\">Thyroid cancer is a serious disease that necessitates prompt diagnosis and treatment. By understanding its types, symptoms, causes, and risk factors, we can take proactive steps to prevent and address this illness. If you or a loved one has been diagnosed with thyroid cancer, it&rsquo;s vital to work with a healthcare team to develop a personalized treatment plan. For those seeking </span><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(44, 130, 201);\"><a href=\"https://www.safegatemedicalcenter.com/contact\"><strong>the Best Thyroid Cancer Treatment in India</strong></a></span><span style=\"font-size: 18px; font-family: Calibri, sans-serif; color: rgb(0, 0, 0);\">, early intervention and the right support can significantly improve quality of life and treatment outcomes. With the right approach, it is possible to manage thyroid cancer effectively and live a healthier life.</span></p>', '2024-10-22', '', 'the-Best-Thyroid-Cancer-Treatment-in-India', 'Understanding Thyroid Cancer', 'Understanding Thyroid Cancer');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` varchar(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
