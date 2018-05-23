package cn.com.zhirun.ssm.service.impl;

import cn.com.zhirun.ssm.dao.CBusinessModelMapper;
import cn.com.zhirun.ssm.model.BusinessModel;
import cn.com.zhirun.ssm.service.IBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class BusinessServiceImpl implements IBusinessService {

    @Autowired
    CBusinessModelMapper cBusinessModelMapper;

    @Override
    public String createBusinessId() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        String date = sdf.format(new Date());
        String bid = "LM" + date;
        return bid;
    }

    @Override
    public int checkBusinessByName(BusinessModel bns) {

        return cBusinessModelMapper.checkBusinessByName(bns);
    }

    @Override
    public void addBusiness(BusinessModel bns) {

        cBusinessModelMapper.insert(bns);
    }

    @Override
    public int selectPage(BusinessModel bns) {

        return cBusinessModelMapper.selectPage(bns);
    }

    @Override
    public List<BusinessModel> selectByPage(BusinessModel bns, int count, int page) {

        return cBusinessModelMapper.selectByPage(bns, count, page);
    }

    @Override
    public void deleteBusiness(BusinessModel bns) {
        cBusinessModelMapper.deleteBusiness(bns);
    }

    @Override
    public BusinessModel selectByPrimaryKey(String bnsId) {
        return cBusinessModelMapper.selectByPrimaryKey(bnsId);
    }

    @Override
    public int updateBusiness(BusinessModel businessModel) {
        businessModel.setBnsUpdateDate(new UserServiceImpl().getNowDate());
        return cBusinessModelMapper.updateBusiness(businessModel);
    }
}
