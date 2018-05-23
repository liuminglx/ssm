package cn.com.zhirun.ssm.dao;

import cn.com.zhirun.ssm.model.BusinessModel;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CBusinessModelMapper extends BusinessModelMapper {

    public int checkBusinessByName(BusinessModel bns);

    public int selectPage(BusinessModel bns);

    public List<BusinessModel> selectByPage(@Param("pbns") BusinessModel bns, @Param("pcount") int count, @Param("ppage") int page);

    public void deleteBusiness(BusinessModel bns);

    public int updateBusiness(BusinessModel businessModel);
}
