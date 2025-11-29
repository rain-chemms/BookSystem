-- 1. 创建触发器：插入 User 后自动创建 UserMessage
DROP TRIGGER IF EXISTS AfterUserInsert;--删除现有触发器--
DELIMITER $$
CREATE TRIGGER AfterUserInsert
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    INSERT INTO usermessage (UMID,UserID,UMGender,UMBirthday,UMIntroduce)
    VALUES (0,NEW.UserID,NULL,NULL,NULL);
END
$$
DELIMITER ;