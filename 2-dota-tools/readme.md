# DotA 2 Course

## Business Model
It will consist of many different courses starting every 15 days;
Students can enter or leave in monthly periods. If they have paid for a month
and already have done a class in the month that comes after the last payment;

## Payment Methods
Credit Card

## Database Method
* [ ] Student
        StudentID
        ProfilePictureUrl
        LastName
        FirstName
        Email
        Rank
        SteamID
        MembershipStart
        MembershipEnd
        Memberships
        MemberActive
        LastPlayedAt
        Group
#################################
* [ ] Teacher
        TeacherID
        LastName
        FirstName
#################################
* [ ] Classroom
        ClassroomID
        ClassName
        SubjectID
#################################        
* [ ] Class
        ClassID
        SubjectID
        Method
#################################
* [ ] Subject
        SubjectName
        SubjectID
        Description
#################################
* [ ] Hero
        Name
        MainAttribute
