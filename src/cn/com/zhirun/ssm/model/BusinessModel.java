package cn.com.zhirun.ssm.model;

public class BusinessModel {
    private String bnsId;

    private String bnsName;

    private String bnsTel;

    private String bnsGroup;

    private String bnsArea;

    private String bnsAddr;

    private Double bnsMoney;

    private Double bnsMoneyFrom;

    private Double bnsMoneyTo;

    private String bnsCreateDate;

    private String bnsUpdateDate;

    private Integer bnsDeleflg;

    private String bnsComment;

    private String pc;

    private String count;

    public String getBnsId() {
        return bnsId;
    }

    public void setBnsId(String bnsId) {
        this.bnsId = bnsId == null ? null : bnsId.trim();
    }

    public String getBnsName() {
        return bnsName;
    }

    public void setBnsName(String bnsName) {
        this.bnsName = bnsName == null ? null : bnsName.trim();
    }

    public String getBnsTel() {
        return bnsTel;
    }

    public void setBnsTel(String bnsTel) {
        this.bnsTel = bnsTel == null ? null : bnsTel.trim();
    }

    public String getBnsGroup() {
        return bnsGroup;
    }

    public void setBnsGroup(String bnsGroup) {
        this.bnsGroup = bnsGroup == null ? null : bnsGroup.trim();
    }

    public String getBnsArea() {
        return bnsArea;
    }

    public void setBnsArea(String bnsArea) {
        this.bnsArea = bnsArea == null ? null : bnsArea.trim();
    }

    public String getBnsAddr() {
        return bnsAddr;
    }

    public void setBnsAddr(String bnsAddr) {
        this.bnsAddr = bnsAddr == null ? null : bnsAddr.trim();
    }

    public Double getBnsMoney() {
        return bnsMoney;
    }

    public void setBnsMoney(Double bnsMoney) {
        this.bnsMoney = bnsMoney;
    }

    public Double getBnsMoneyFrom() {
        return bnsMoneyFrom;
    }

    public void setBnsMoneyFrom(Double bnsMoneyFrom) {
        this.bnsMoneyFrom = bnsMoneyFrom;
    }

    public Double getBnsMoneyTo() {
        return bnsMoneyTo;
    }

    public void setBnsMoneyTo(Double bnsMoneyTo) {
        this.bnsMoneyTo = bnsMoneyTo;
    }

    public String getBnsCreateDate() {
        return bnsCreateDate;
    }

    public void setBnsCreateDate(String bnsCreateDate) {
        this.bnsCreateDate = bnsCreateDate == null ? null : bnsCreateDate.trim();
    }

    public String getBnsUpdateDate() {
        return bnsUpdateDate;
    }

    public void setBnsUpdateDate(String bnsUpdateDate) {
        this.bnsUpdateDate = bnsUpdateDate == null ? null : bnsUpdateDate.trim();
    }

    public Integer getBnsDeleflg() {
        return bnsDeleflg;
    }

    public void setBnsDeleflg(Integer bnsDeleflg) {
        this.bnsDeleflg = bnsDeleflg;
    }

    public String getBnsComment() {
        return bnsComment;
    }

    public void setBnsComment(String bnsComment) {
        this.bnsComment = bnsComment == null ? null : bnsComment.trim();
    }

    public String getPc() {
        return pc;
    }

    public void setPc(String pc) {
        this.pc = pc;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }
}