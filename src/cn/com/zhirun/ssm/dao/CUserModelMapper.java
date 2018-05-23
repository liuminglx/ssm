package cn.com.zhirun.ssm.dao;

import cn.com.zhirun.ssm.model.UserModel;

import java.util.List;

public interface CUserModelMapper extends UserModelMapper{

    List<String> selectUser();

    public int checkUser(UserModel user);

    public int checkUserExistByName(UserModel user);
}
