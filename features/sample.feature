@foo
Feature: Upload file tests

    Background: bg Upload file
        Given I have a file to upload

    @regression
    Scenario: upload a valid file
        When I upload a file
        Then message should show

    @regression1
    Scenario Outline: much more complex stuff
        Given a variable is set to <var>
        When I increment this variable by <increment>
        Then the variable should contain <result>
        Examples:
            | var | increment | result |
            | 100 | 5         | 105    |
            | 99  | 1234      | 1333   |
            | 12  | 5         | 17     |