package cn.com.zhirun.ssm.controller;

import cn.com.zhirun.ssm.model.UserModel;
import cn.com.zhirun.ssm.service.IUserService;
import cn.com.zhirun.ssm.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@RequestMapping("/user")
@Controller
public class UserController {

    @Autowired
    IUserService userService;

    @RequestMapping("/UserRegist")
    public String addUser(UserModel user, HttpServletResponse response, HttpServletRequest request) throws IOException {

        int num = userService.checkUserExistByName(user);
        if (num == 0) {
            user.setUserId(userService.createUserId());
            user.setUserCreateDate(userService.getNowDate());
            userService.addUser(user);
            return "redirect:/html/login.jsp";
        } else {
            return "redirect:/html/register.jsp";
        }
    }

    @ResponseBody
    @RequestMapping("/UserSelectByName")
    public ModelMap selectUserByName(UserModel user) {
        ModelMap modelMap = new ModelMap();
        int num = userService.checkUserExistByName(user);
        modelMap.put("num", num);
        return modelMap;
    }

    @ResponseBody
    @RequestMapping("/UserLogin")
    public ModelMap checkUser(UserModel user, HttpSession session) {
        int num = userService.checkUser(user);
        ModelMap modelMap = new ModelMap();
        if (num > 0) {
            session.setAttribute("userName", user.getUserName());
        }
        modelMap.put("num", num);
        return modelMap;
    }
}
