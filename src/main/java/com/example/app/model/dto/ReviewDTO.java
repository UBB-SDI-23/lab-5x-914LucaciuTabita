package com.example.app.model.dto;

import com.example.app.model.Product;
import com.example.app.model.User;
import jakarta.persistence.*;

import java.sql.Date;

public class ReviewDTO {
    private Integer id;

    private Integer userId;

    private Integer productId;
    private Integer score;
    private String comment;
    private Date postedDate;

    public ReviewDTO(Integer id, Integer userId, Integer productId, Integer score, String comment, Date postedDate) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.score = score;
        this.comment = comment;
        this.postedDate = postedDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(Date postedDate) {
        this.postedDate = postedDate;
    }
}
