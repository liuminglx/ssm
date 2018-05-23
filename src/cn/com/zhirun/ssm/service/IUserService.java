package cn.com.zhirun.ssm.service;

import cn.com.zhirun.ssm.model.UserModel;

public interface IUserService {

    public String createUserId();

    public String checkId(String uid);

    public String getNowDate();

    public void addUser(UserModel user);

    public int checkUserExistByName(UserModel user);

    public int checkUser(UserModel user);
}
