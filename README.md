# Lab 1 assignment

**Points**: 1

**Deadline**: Week 2

**Last chance deadline and penalties**: Week 4, -0.3 points / week delayed

----

Choose any programming language and a **backend** framework and setup a development environment in it. Create an
application with CRUD functionalities for a single entity of your choice. The entity should have at least 5 attributes,
not counting the ID. You do not need any validations.

Remarks:

- Your application should either expose a REST API (like Django REST Framework, Flask) or a webpage that can be accessed
  in the browser (like Django)
- Console apps are **not** allowed
- Frontend frameworks / libraries (React, Angular) are **not** allowed
- You should be able to explain basic things about your framework of choice (where routes are defined, how the models
  are handled etc.)
- You will also be marked on good coding practices and design principles, as they have been taught in Fundamentals of
  Programming and Object Oriented Programming and as they apply to your choice of framework

Suggestions:

- You can probably find libraries in your favorite language that help you build Web applications and REST APIs
- I suggest you make a REST API, as that will become mandatory later on anyway
- Java has Spring, Python has Django, C# has WebApi etc. The keywords to search for are your language + rest api
- Make sure you get comfortable with reading your choice's documentation and that you pick something with an active
  community, as you will be spending a lot of time studying stuff on your own

# Lab 2 assignment

**Points**: 1

**Deadline**: Week 3

**Last chance deadline and penalties**: Week 5, -0.3 points / week delayed

----

Continue working on the application from the previous assignment. Push your project to this repository.

You will need to:
- Add at least 2 more entities with at least `5` attributes each: you should have at least `3` entities in total.
- Add a **1 to many** relation between two of your entities. Some of the entities can be unrelated, but be prepared to also add a many to many relation soon. Choose your entities accordingly.
- Add storage to a database if you don't already have it: any database type is allowed. Rerunning the application should keep previously existing data. It's ok if changes to the data model drops and recreates the database (you do not need migrations yet).
- Implement CRUD for at least one more entity and filtering on a numeric field for at least one entity. The filtering should return all entities with the numeric field higher than a given value.
- Have a REST API usable in Postman.

# Lab 3 assignment

**Points**: 2

**Deadline**: Week 4

**Last chance deadline and penalties**: Week 6, -0.5 points / week delayed

----

Continue working on the application from the previous assignment. Push your project to this repository.

- Add a **many to many** relation between `2` entities. This should be added as a separate entity containing the two related entities or their IDs and at least 2 additional attributes. For example: `Transaction` with `Product` and `Client` as the related entities and `Date` and `Volume` as the additional attributes.
- Make sure all of your entities are part of at least one `1 to 1`, `1 to many` or `many to many` relation.
- Add CRUD for all entities.
- Add at least `10` realistic-looking records for each of your models / tables.
- Use Trello or ClickUp and set up a Kanban board (with at least `Todo`, `Doing`, `Done` or equivalent lists). You will need to update this for all functionalities you do from now on. Your lab instructor will give you feedback on how to improve its setup.
- Create a UML diagram for your application and a database diagram for your database.
- Add a statistical report involving two entities. For example: show all movies ordered by the average age of their actors. Such reports **need** to show the computed field: the average age of the actors in this case. You probably want to use a `DTO` class for this.

For this and all future assignments, unless otherwise specified, you are not allowed to write any raw SQL queries: it must all be done through an ORM.


# Lab 4 assignment

**Points**: 1

**Deadline**: Week 5

**Last chance deadline and penalties**: Week 7, -0.3 points / week delayed

----

You will need to:
- Add unit tests for the two non-CRUD functionalities from the previous assignments. You might want to google for a "mocking library" in your language and framework of choice. This is usually how it's done, but if you can't find anything relevant, then search for how to do unit testing in your framework.  
    - We use the term "unit tests" loosely here: you might find them called something else in various documentations. We just care about testing our models and endpoints automatically, from the same app (without any external tools or apps, so things like Selenium are not allowed).  
- Create an account on https://aws.amazon.com/free/ or https://cloud.google.com/free (or equivalent) and deploy your project to a virtual machine. Your application should be usable by anyone with a link to it. You do not need to worry about security and performance at this point. Make sure to shut down your VM when you're not using it, so that you don't waste your resources.  
    - Note that Google Cloud gives you `300$` in credits, allowing you to use more resources. Since you will only need to run the VM while you work on it and during the labs, this is way more than enough. Depending on your tech stack choices you may or may not need more than the `1 GB` of RAM available to you in the free tier instances.  
    - Make sure that you add at least `30 GB` of storage to your VM.  
    - You must use a remote server that you can SSH into. You are not allowed to use local VMs and you are not allowed to use your own home server.
- Add at least `3` validation rules. They can be spread across multiple entities.
- Continue tracking your tasks on Trello (or equivalent). Also track the estimated time (write it before starting the task) and the actual time to completion (write it after finishing the task). Reference the tasks numbers in your commit messages.

Recall that raw SQL queries are still not allowed.

# Lab 5x assignment

To make things easier with deployments, you will be using this repository for a while. Check this link weekly for new requirements: https://github.com/UBB-SDI-23/Lab-5x-assignments/blob/main/README.md 

Commit and push everything to this repository.

## Lab 5 assignment

**Points**: 0.3

**Deadline**: Week 6

**Last chance deadline and penalties**: Week 8, -0.1 points / week delayed

You will need to:
- Add a frontend to your REST API. It should be a Single Page Application (SPA). You can choose any frontend framework or library that lets you create SPAs: React, Angular, Vue etc. It should be something that is under active development.
- Add Swagger to your REST API. It should be publicly accessible.
- Implement at least one CRUD and one filter / statististical report on the frontend.
- Users should be able to navigate the interface without manually editing the URL. The interface should also be intuitive and self-explanatory: if you need to explain it to your lab teacher, it's not good enough.
- Deploy the frontend either on https://www.netlify.com/ (or equivalent) or on your virtual machine. If you choose netlify or equivalent, it should deploy automatically when you commit to github.
- Try to make it look nice and user friendly by adding a UI Components Library like Material UI, Bulma, or even something like Bootstrap, Tailwind etc. This is optional for now, but it will be required later, and you will save time in the long run if you start doing it from the beginning.


