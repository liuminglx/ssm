package cn.com.zhirun.ssm.service;

import cn.com.zhirun.ssm.model.BusinessModel;

import java.util.List;

public interface IBusinessService {

    public String createBusinessId();

    public int checkBusinessByName(BusinessModel bns);

    public void addBusiness(BusinessModel bns);

    public int selectPage(BusinessModel bns);

    public List<BusinessModel> selectByPage(BusinessModel bns, int count, int page);

    public void deleteBusiness(BusinessModel bns);

    public BusinessModel selectByPrimaryKey(String bnsId);

    public int updateBusiness(BusinessModel businessModel);
}
