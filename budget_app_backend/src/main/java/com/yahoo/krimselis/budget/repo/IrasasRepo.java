package com.yahoo.krimselis.budget.repo;
import com.yahoo.krimselis.budget.model.Irasas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IrasasRepo extends JpaRepository <Irasas, Long> {
    void deleteIrasasById(Long id);

    Optional<Irasas> findIrasasById(Long id);
}
