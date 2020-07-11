/*
 Navicat MySQL Data Transfer

 Source Server         : gengxiangyi
 Source Server Type    : MySQL
 Source Server Version : 50729
 Source Host           : localhost:3306
 Source Schema         : graduation

 Target Server Type    : MySQL
 Target Server Version : 50729
 File Encoding         : 65001

 Date: 10/06/2020 22:36:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for device
-- ----------------------------
DROP TABLE IF EXISTS `device`;
CREATE TABLE `device`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `number` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `设备名`(`name`) USING BTREE COMMENT '设备名唯一'
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of device
-- ----------------------------
INSERT INTO `device` VALUES (11, '手机', 5);
INSERT INTO `device` VALUES (12, '电话', 5);
INSERT INTO `device` VALUES (13, 'iphone', 5);
INSERT INTO `device` VALUES (14, '笔记本电脑', 5);
INSERT INTO `device` VALUES (15, '显示器', 5);
INSERT INTO `device` VALUES (16, '键盘', 10);
INSERT INTO `device` VALUES (17, '风扇', 5);

-- ----------------------------
-- Table structure for fault
-- ----------------------------
DROP TABLE IF EXISTS `fault`;
CREATE TABLE `fault`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  `department` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `location` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `time` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_id` int(20) NOT NULL,
  `device_id` int(25) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 63 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fault
-- ----------------------------
INSERT INTO `fault` VALUES (45, '高明', '<p>手机不能进行充电</p>', '平台测试部', '北京市朝阳区', '13456287610', '2020-06-20/12:00:00', 6, 11);
INSERT INTO `fault` VALUES (46, '李想', '<p>风扇不工作</p>', '平台行政部', '北京市中关村', '13478109423', '2020-06-22/13:00:00', 6, 17);
INSERT INTO `fault` VALUES (47, '刘亮', '<p>iphnoe黑屏不工作</p>', '平台运维部', '北京市中关村', '13894106728', '2020-06-25/08:00:00', 6, 13);
INSERT INTO `fault` VALUES (51, '陈琦', '<p>电脑蓄电不足</p>', '平台行政部', '北京市中关村', '18943825410', '2020-06-17/19:00:00', 6, 14);
INSERT INTO `fault` VALUES (62, 'yuhang', '<p>手机黑屏</p>', '平台研发部', '北京市中关村', '18943825410', '2020-06-10/07:00:00', 35, 11);

-- ----------------------------
-- Table structure for fault_management
-- ----------------------------
DROP TABLE IF EXISTS `fault_management`;
CREATE TABLE `fault_management`  (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `fault_id` int(50) NULL DEFAULT NULL,
  `uuser_id` int(20) NULL DEFAULT NULL,
  `status` int(20) NULL DEFAULT NULL,
  `keeper_id` int(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fault_management
-- ----------------------------
INSERT INTO `fault_management` VALUES (53, 'yuhang', 62, 35, 3, 7);

-- ----------------------------
-- Table structure for goodwords
-- ----------------------------
DROP TABLE IF EXISTS `goodwords`;
CREATE TABLE `goodwords`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `star` int(1) NULL DEFAULT NULL,
  `keeper_id` int(11) NULL DEFAULT NULL,
  `comment_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goodwords
-- ----------------------------
INSERT INTO `goodwords` VALUES (27, 3, 7, '真棒');
INSERT INTO `goodwords` VALUES (28, 3, 7, '专业');
INSERT INTO `goodwords` VALUES (29, 3, 7, '很专业');
INSERT INTO `goodwords` VALUES (30, 3, 7, '技术很专业');
INSERT INTO `goodwords` VALUES (31, 3, 7, '技术很专业');
INSERT INTO `goodwords` VALUES (32, 3, 7, '技术很专业');
INSERT INTO `goodwords` VALUES (33, 3, 7, '技术很专业');
INSERT INTO `goodwords` VALUES (34, 3, 7, '技术很专业');
INSERT INTO `goodwords` VALUES (35, 3, 7, '很专业');
INSERT INTO `goodwords` VALUES (36, 3, 7, '技术很好');
INSERT INTO `goodwords` VALUES (37, 3, 7, '技术很好');
INSERT INTO `goodwords` VALUES (38, 3, 7, '技术好');
INSERT INTO `goodwords` VALUES (39, 3, 7, '技术很好');

-- ----------------------------
-- Table structure for management
-- ----------------------------
DROP TABLE IF EXISTS `management`;
CREATE TABLE `management`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) NOT NULL COMMENT '设备ID',
  `use` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '用途',
  `use_id` int(11) NOT NULL COMMENT '员工ID',
  `status` int(1) NOT NULL DEFAULT 1 COMMENT '状态1：借出  0：归还成功',
  `lend_time` int(11) NOT NULL COMMENT '借出时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `device_id`(`device_id`) USING BTREE,
  INDEX `user_id`(`use_id`) USING BTREE,
  CONSTRAINT `device_id` FOREIGN KEY (`device_id`) REFERENCES `device` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `user_id` FOREIGN KEY (`use_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 53 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of management
-- ----------------------------
INSERT INTO `management` VALUES (20, 16, '办公', 8, 1, 1590301230);
INSERT INTO `management` VALUES (22, 11, '11', 6, 1, 1591324777);

-- ----------------------------
-- Table structure for suggest
-- ----------------------------
DROP TABLE IF EXISTS `suggest`;
CREATE TABLE `suggest`  (
  `type` int(10) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of suggest
-- ----------------------------
INSERT INTO `suggest` VALUES (0, 6, '设备及时更换');
INSERT INTO `suggest` VALUES (0, 8, '设备及时更新');
INSERT INTO `suggest` VALUES (0, 9, '设备及时更换');
INSERT INTO `suggest` VALUES (0, 10, '公司设备及时更换');
INSERT INTO `suggest` VALUES (0, 11, '设备及时更新');
INSERT INTO `suggest` VALUES (0, 12, '设备及时更换');
INSERT INTO `suggest` VALUES (0, 13, '设备及时更新');
INSERT INTO `suggest` VALUES (0, 14, '设备及时更新');
INSERT INTO `suggest` VALUES (0, 15, '设备及时更新');
INSERT INTO `suggest` VALUES (0, 16, '设计及时更换');
INSERT INTO `suggest` VALUES (0, 17, '设备及时更新');
INSERT INTO `suggest` VALUES (0, 18, '设备及时更新');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '邮箱',
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '密码',
  `deparment` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '部门',
  `position` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '职位',
  `credit_index` int(10) NOT NULL DEFAULT 100 COMMENT '信用指数',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '昵称',
  `industry` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '所属行业',
  `sign` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '个性签名',
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '头像',
  `type` int(255) UNSIGNED NULL DEFAULT NULL COMMENT '身份类型',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE COMMENT '唯一邮箱'
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (6, 'yh5200224@163.com', '111111', '平台测试部', '后端', 100, 'qqqq', '教育行业', 'aa', NULL, 0);
INSERT INTO `user` VALUES (7, 'aaaaa@qq.com', 'aaaaa', '平台运维部', '运维', 100, '维护人员01', '教育行业', '', NULL, 1);
INSERT INTO `user` VALUES (8, 'admin@qq.com', 'admin', '平台研发部', '产品', 100, '管理员', '教育行业', '', NULL, 2);
INSERT INTO `user` VALUES (9, 'bbbbb@qq.com', 'bbbbb', '平台运维部', '运维', 100, '维护人员02', '教育行业', NULL, NULL, 1);
INSERT INTO `user` VALUES (10, 'ccccc@qq.com', 'ccccc', '平台运维部', '运维', 100, '维护人员03', '教育行业', NULL, NULL, 1);
INSERT INTO `user` VALUES (35, '2386771677@qq.com', '111111', '平台研发部', '前端', 100, 'yuhang', '教育行业', '放学别走', 'http://localhost:3000/static/image/uploads/1591517429622.jpg', NULL);

SET FOREIGN_KEY_CHECKS = 1;
