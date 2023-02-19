@foo
Feature: Upload file tests
  I want to upload file(s)

  Background: 
    Given I go to upload file page

  @regression
  Scenario: upload a single valid file and accept terms 
    When I upload a file successfully
    Then The message should display

  # @regression
  # Scenario: upload a single valid file without accept terms
  #   When I upload a file
  #   Then unable upload should show

  # @regression
  # Scenario: upload a single valid file without accept terms
  #   When I upload a file
  #   Then unable upload should show

  # @regression
  # Scenario: upload a exectutable file and accept terms
  #   When I upload a file
  #   Then unable upload should show

  # @regression
  # Scenario: expect not able to set path by typing
  #   When I upload a file
  #   Then unable upload should show 

  

  # @regression
  # Scenario Outline: much more complex stuff
  #   Given a variable is set to <var>
  #   When I increment this variable by <increment>
  #   Then the variable should contain <result>

  #   Examples: 
  #     | var | increment | result |
  #     | 100 |         5 |    105 |
  #     |  99 |      1234 |   1333 |
  #     |  12 |         5 |     17 |
