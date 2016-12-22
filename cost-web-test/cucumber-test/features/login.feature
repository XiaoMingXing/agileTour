Feature: Login Cost System
  As a user of Cost System
  I want to login with my account
  So that I use my system

  Scenario Outline: login Cost System
    Given open the login page
    When login with users "<UserName>" and "<PassWord>"
    Then login "<LoginResult>"
    Examples:
      | UserName         | PassWord | LoginResult |
      | 920477852@qq.com | error    | failed      |
      | 920477852@qq.com | password | successful  |