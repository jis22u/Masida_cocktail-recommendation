package com.ssafy.cocktail.backend.myAnalysis.service;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendCocktail;
import com.ssafy.cocktail.backend.myAnalysis.dto.RecommendationRequestToPy;

import java.util.ArrayList;
import java.util.List;

public interface CollaborativeRecommendService {
	public List<RecommendCocktail> recommendCocktailByBase(Long userId) throws UnirestException, JsonProcessingException;
	public List<RecommendCocktail> recommendCocktailByIngredient(Long userId) throws UnirestException, JsonProcessingException;
	public List<Long> dataToPython(RecommendationRequestToPy recommendationReq) throws UnirestException, JsonProcessingException;
}
