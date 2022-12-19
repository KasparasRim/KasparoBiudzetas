package com.yahoo.krimselis.budget.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity
public class Tipas implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = true)
    private Long id;

    @Column(unique = true)
    private String tipasStr;
    public Tipas() {
    };


    public Tipas(Long id, String tipasStr) {
        this.id = id;
        this.tipasStr = tipasStr;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipasStr() {
        return tipasStr;
    }

    public void setTipasStr(String tipasStr) {
        this.tipasStr = tipasStr;
    }

    @Override
    public String toString() {
        return "Tipas{" +
                "id=" + id +
                ", tipasStr='" + tipasStr + '\'' +
                '}';
    }
}