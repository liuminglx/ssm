package cn.com.zhirun.ssm.dao;

import cn.com.zhirun.ssm.model.UserModel;
import java.util.List;

public interface UserModelMapper {
    int deleteByPrimaryKey(String userId);

    int insert(UserModel record);

    UserModel selectByPrimaryKey(String userId);

    List<UserModel> selectAll();

    int updateByPrimaryKey(UserModel record);
}