package cn.com.zhirun.ssm.service.impl;

import cn.com.zhirun.ssm.dao.CUserModelMapper;
import cn.com.zhirun.ssm.dao.UserModelMapper;
import cn.com.zhirun.ssm.model.UserModel;
import cn.com.zhirun.ssm.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    CUserModelMapper cUserModelMapper;

    @Override
    public String createUserId() {


        String uid = "000001";
        List<String> userList = cUserModelMapper.selectUser();
        if (userList == null || userList.isEmpty()) {
            return uid;
        } else {
            int num = 0;
            num = Integer.valueOf(userList.get(userList.size() - 1)) + 1;
            uid = checkId(String.valueOf(num));
            return uid;
        }
    }

    @Override
    public String checkId(String uid) {

        if (uid.length() == 1) {
            uid = "00000" + uid;
        } else if (uid.length() == 2) {
            uid = "0000" + uid;
        } else if (uid.length() == 3) {
            uid = "000" + uid;
        } else if (uid.length() == 4) {
            uid = "00" + uid;
        } else {
            uid = "0" + uid;
        }
        return uid;
    }

    @Override
    public String getNowDate() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        String date = sdf.format(new Date());
        return date;
    }

    @Override
    public void addUser(UserModel user) {
        cUserModelMapper.insert(user);
    }

    @Override
    public int checkUserExistByName(UserModel user) {
        int num = 0;
        num = cUserModelMapper.checkUserExistByName(user);
        return num;
    }

    @Override
    public int checkUser(UserModel user) {
        int num = cUserModelMapper.checkUser(user);
        return num;
    }
}
