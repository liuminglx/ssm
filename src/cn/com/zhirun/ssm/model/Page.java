package cn.com.zhirun.ssm.model;

import java.util.List;

public class Page {

    private int maxPage;
    private int page;
    private List<BusinessModel> list;

    public int getMaxPage() {
        return maxPage;
    }

    public void setMaxPage(int maxPage) {
        this.maxPage = maxPage;
    }

    public List<BusinessModel> getList() {
        return list;
    }

    public void setList(List<BusinessModel> list) {
        this.list = list;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }
}
