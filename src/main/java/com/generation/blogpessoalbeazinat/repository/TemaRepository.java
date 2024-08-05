package com.generation.blogpessoalbeazinat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.generation.blogpessoalbeazinat.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long>{
	
	public List<Tema> findAllByDescricaoContainingIgnoreCase(@Param("descricao") String descricao);
}
