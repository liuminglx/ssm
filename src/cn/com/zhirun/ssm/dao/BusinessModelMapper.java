package cn.com.zhirun.ssm.dao;

import cn.com.zhirun.ssm.model.BusinessModel;
import cn.com.zhirun.ssm.model.UserModel;

import java.util.List;

public interface BusinessModelMapper {
    int deleteByPrimaryKey(String bnsId);

    int insert(BusinessModel record);

    BusinessModel selectByPrimaryKey(String bnsId);

    List<BusinessModel> selectAll();

    int updateByPrimaryKey(BusinessModel record);

    List<UserModel> selectUser();
}