Feature: Upload file tests
  I want to upload file(s)

  Background: 
    Given I go to upload file page

  @regression
  Scenario: users upload a single valid file
    Given I choose a file 'campfire.jpg'
    And Accept terms of service
    When I submit a file
    Then The message should display

  @regression
  Scenario: without accepting terms, user upload a file
    When I choose a file 'campfire.jpg'
    And Do not accept terms of service
    Then I could not submit a file

  @regression
  Scenario Outline: users upload an executable file
    Given I choose an executable file <file>
    And Accept terms of service
    Then I could not submit an executable file

    Examples: 
      | file             |
      | 'executable.bat' |
      | 'program.exe'    |
