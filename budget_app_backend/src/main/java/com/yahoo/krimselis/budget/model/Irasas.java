package com.yahoo.krimselis.budget.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
public class Irasas implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(nullable = false, updatable = true)
    private Long id;
    private Double suma; // Ateityje BIGDECIMAL
    private LocalDateTime data;
    private String kategorija;
    private String tipas;
    public Irasas() {};

    public Irasas(Long id, Double suma, LocalDateTime data, String kategorija, String tipas) {
        this.id = id;
        this.suma = suma;
        this.data = data;
        this.kategorija = kategorija;
        this.tipas = tipas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipas() {
        return tipas;
    }

    public void setTipas(String tipas) {
        this.tipas = tipas;
    }

    public Double getSuma() {
        return suma;
    }

    public void setSuma(Double suma) {
        this.suma = suma;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public String getKategorija() {
        return kategorija;
    }

    public void setKategorija(String kategorija) {
        this.kategorija = kategorija;
    }

    @Override
    public String toString() {
        return "Irasas{" +
                "id=" + id +
                ", suma=" + suma +
                ", data=" + data +
                ", kategorija='" + kategorija + '\'' +
                ", tipas='" + tipas + '\'' +
                '}';
    }
}