# Test Plan

## Introduction

This document contains test plan description and intended for QA. The main goal of the testing is to assure that the product
actually met all requirements.

## Test items

Main test items:

- User registration
- Pet creation
- Main screen and Pet state
- Persistance across sessions
- Pet death and recreation
- UI persistance

## Risks

The end product is highly dependent on chromium web view. If bug will occur in fresh release of chromium, it can potentially break the application.

## Features to be Tested

1. First launch
   - Username input field and submit button should be visible and functional
   - Petname input field and submit, back buttons be visible and functional
2. Second launch
   - Main screen should be visibile
   - Death sequence should be completable and after death sequence root route should redirect to death screen

## Test Approach

The end product is higly dependent on local storage. This makes it really complicated to unit test. Selected test approach is end-to-end testing with cypress.

## Pass / Fail Criteria

The test is passed if automated sequence of actions behaved correctly and reached end of current test.
Any language based error or application lag or unwanted infinite loop will fail the test.
Each test will be accompanied with screenshots. If test is failed cypress will give detailed description on the screenshot, else the screenshot will contain normal flow of events.

## Conclusion

[Features to be Tested](#features-to-be-tested) will be updated with each codebase update.
