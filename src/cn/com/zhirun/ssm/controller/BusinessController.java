package cn.com.zhirun.ssm.controller;

import cn.com.zhirun.ssm.model.BusinessModel;
import cn.com.zhirun.ssm.model.Page;
import cn.com.zhirun.ssm.service.IBusinessService;
import cn.com.zhirun.ssm.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

@Controller
public class BusinessController {

    @Autowired
    IBusinessService businessService;

    @RequestMapping("/BusinessInsert")
    public String addBusiness(BusinessModel businessModel) {
        int num = businessService.checkBusinessByName(businessModel);
        if (num == 0) {
            businessModel.setBnsId(businessService.createBusinessId());
            businessModel.setBnsCreateDate(new UserServiceImpl().getNowDate());
            businessModel.setBnsUpdateDate(new UserServiceImpl().getNowDate());
            businessModel.setBnsDeleflg(0);
            businessService.addBusiness(businessModel);
            int log = JOptionPane.showConfirmDialog(null, "用户添加成功，是否继续添加？", "是否继续", JOptionPane.YES_NO_OPTION);
            if (log == JOptionPane.YES_OPTION) {
                return "redirect:/html/insert.jsp";
            } else {
                return "redirect:/html/search.jsp";
            }
        } else {
            JOptionPane.showMessageDialog(null, "该商家已存在，请重新添加", "失败", JOptionPane.ERROR_MESSAGE);
            return "redirect:/html/insert.jsp";
        }
    }

    @ResponseBody
    @RequestMapping("/PageIng")
    public ModelMap selectBusiness(BusinessModel businessModel) {
        String str = businessModel.getCount();
        int count = 0;
        String p;
        if (str != null && !"".equals(str)) {
            count = Integer.parseInt(str);
        }
        if (count < 1) {
            count = 1;
        }
        p = businessModel.getPc();
        int pc = 1;
        if (p != null && !"".equals(p)) {
            pc = Integer.parseInt(p);
        }
        if (businessModel.getBnsMoneyFrom() != null && !"".equals(businessModel.getBnsMoneyFrom())) {
            businessModel.setBnsMoneyFrom(Double.valueOf(businessModel.getBnsMoneyFrom()));
        }
        if (businessModel.getBnsMoneyTo() != null && !"".equals(businessModel.getBnsMoneyFrom())) {
            businessModel.setBnsMoneyTo(Double.valueOf(businessModel.getBnsMoneyTo()));
        }
        int countOfList = businessService.selectPage(businessModel);

        int maxPage = countOfList % pc == 0 ? countOfList / pc : countOfList / pc + 1;
        List<BusinessModel> bList = new ArrayList<>();
        bList = businessService.selectByPage(businessModel, (count - 1) * pc, pc);
        Page page = new Page();
        page.setList(bList);
        page.setMaxPage(maxPage);
        page.setPage(countOfList);
        ModelMap modelMap = new ModelMap();
        modelMap.put("page", page);
        return modelMap;
    }

    @ResponseBody
    @RequestMapping("/BusinessDelete")
    public ModelMap deleteBusiness(BusinessModel bns) {

        businessService.deleteBusiness(bns);
        ModelMap modelMap = new ModelMap();
        return modelMap;
    }

    @ResponseBody
    @RequestMapping("/BusinessSelectById")
    public ModelMap selectByPrimaryKey(String bnsId) {
        BusinessModel businessModel = businessService.selectByPrimaryKey(bnsId);
        ModelMap modelMap = new ModelMap();
        modelMap.put("businessModel", businessModel);
        return modelMap;
    }

    @ResponseBody
    @RequestMapping("/BusinessUpdate")
    public ModelMap updateBusiness(BusinessModel bns, HttpSession session) {
        int num = businessService.updateBusiness(bns);
        if (num == 1) {
            session.setAttribute("business", bns);
        }
        ModelMap modelMap = new ModelMap();
        modelMap.put("num", num);
        return modelMap;
    }
}
