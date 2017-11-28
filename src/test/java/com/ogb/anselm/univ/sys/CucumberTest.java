package com.ogb.anselm.univ.sys;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(format = {"pretty", "html:reports/tests/cucumber"})

public class CucumberTest { }