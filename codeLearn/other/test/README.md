# FullStackWeb

1. What is Semantic HTML?

Semantic HTML means HTML elements with a meaning.

2. What is HTML used for?

HTML is the language for describing the structure of Web pages.

3. What is an attribute and where do we put it?

Attributes provide additional information about an element.  Every name has some value that must be written within quotes

4. What is the h1 tag used for? How many times should I use it on a page?

H1 tags tell search engine bots and web users what a page is about. Every page needs only one H1 tag.

5. Name two tags that have required attributes

	<img src= “”>
	<a href = “”> </a>

6. What do we put in the head of our HTML document?

The HTML <head> element is a container for the following elements: <title>, <style>, <meta>, <link>, <script>, and <base>.

7. What is an id?

The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).

8. What elements can I add an id to?

In HTML5, the id attribute can be used on any HTML element

9. How many times can I use the same id on a page?

The HTML id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.

10. What is a class?

A CSS class is an attribute used to define a group of HTML elements in order to apply unique formatting to those elements in CSS.

11. What elements can I add a class to?

You can add a class attribute to the HTML elements you want to style.

12. How many times can I use the same class on a page?

There is no technical limit

13. How do I get my link to open in a new tab?

just add a target="_blank" attribute to your links (anchor tags).

14. What is the alt attribute in the image tag used for?

An image with an alternate text specified.

15. How do I reference an id?

The syntax for id is: write a hash character (#), followed by an id name.

16. What is the difference between a section and a div

<section> means that the content inside is grouped (i.e. relates to a single theme), and should appear as an entry in an outline of the page. <div> , on the other hand, does not convey any meaning, aside from any found in its class , lang and title attributes.

17. What is CSS used for?

CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts.

18. How do we select an element? Example - every h2 on the page
Elements are designators that define the structure and content of objects within a page.
        The h2 element represents a level 2 heading. Headings (from h1 to h6) are titles that define implied sections in the document and arrange
        its contents in a hierarchical structure.
19. What is the difference between a class and an id? - Give me an example of when I might use each one

id is used for single elements that appear on the page for only once (e.g. header, footer, menu), whereas class is used for single or multiple elements that appear on the page for once or more than once.

20. How do we select classes in CSS?

To select elements with a specific class, write a period (.) character, followed by the name of the class.

21. How do we select a p element with a single class of “human””?

<p class = “human” > </p>

22. What is a parent child selector? When would this be useful?

Child Selector is used to match all the elements which are child of a specified element. It gives the relation between two elements.
        It is useful when defining the visual style and appearance of the elements with parents vs child relationship.


23. How do you select all links within a div with the class of sidebar?
 	div .sidebar {}

24. What is a pseudo selector?

CSS pseudo-classes are used to add styles to selectors, but only when those selectors meet certain conditions. A pseudo class is expressed by adding a colon (:) after a selector in CSS, followed by a pseudo-class such as "hover", "focus", or "active",

25. What do we use to change the spacing between lines?

Use the line-height property in CSS to do so.

26. What do we use to change the spacing between letters?

letter-spacing CSS property sets the horizontal spacing behavior between text characters.

27. What do we use to change everything to CAPITALS? lowercase? Capitalize?

The text-transform CSS property

28. How do I add a 1px border around my div that is dotted and black?
	.mydiv { border: dotted 1px black; }
border: dotted 1px black;


29. How do I select everything on the page?

The * selector selects all elements do the job, for example: * { background-color: yellow;} Select all elements, and set their background color to yellow.

30. How do I write a comment in CSS?

     /* */

31. How do I find out what file I am in, when I am using the command line?

      pwd

32. Using the command line - how do I see a list of files/folders in my current folder?

      “ ls -la”

33. How do I remove a file via the command line? Why do I have to be careful with this?

      “ rm filename”

34. Why should I use version control?
35. How often should I commit to github?

36. What is the command we would use to push our repo up to github?
	The git command : git push do the job. for example, git push -u origin main
37. Walk me through Lambda's git flow.
1. Create MY OWN version of Repo —> (Fork)
        2. My name should now be in front of the repo name before the slash '/' if forking is successful
        3. Clone my Repo using githubs 'Clone or download' button
        4. Back inside the CLI, use the cd command to go to the directory where I am going to want to clone the forked Repo (i.e.
            The location where the repo should be saved on my computer)
        5. Use the git clone <link-to-repo> command to clone the repo to the directory I am currently in.
        6. cd into the newly created repo using the cd <repo-name> command
        7. Use the git checkout -b 'firstname-lastname' command to create my own branch name for the repo (this is the branch that I will be doing my work on)
        8. Now I can work on the repo and start getting the project assignment done.
        9. To add and commit changes on the branch I can do the following
            . git add .
            . git commit -m "the helpful commit message here"            
        10. Push the changes back up to the Github repo
            . git push -u origin branch-name
        11. Now that the changes are on github prepare to submit a PR (Pull Request)
        12. Go back to my forked Project repo on github (make sure the FORKED copy NOT the original Lambda one)
            . Click on the Branch:master button on the left side
            . This will create a dropdown to select the name-branch now
            . Click the name-branch and then click the **New pull request** button to make a pull request on the name branch
            . After click new pull request it should redirect to the pull request page
            . IT IS IMPORTANT THAT DO NOT CLICK THE Create pull request BUTTON UNTIL AFTER COMPLETED THE NEXT STEP


Stretch Questions

    1. What is the difference between an inline element and a block element?
    2. What happens when an element is positioned absolutely?
    3. How do I make an element take up only the amount of space it needs but also have the ability to give it a width?
    4. Name 3 elements that are diplay block by default, 2 elements that are display inline by default and 1 element that is display inline-block by default
    5. In your own words, explain the box model. What is the "fix" for the box model, in other words, how do we make all elements respect the width we've given them?


Clone - The clone command downloads an existing Git repository to your local computer. You will then have a full-blown, local version of that Git repo and can start working on the project. Typically, the "original" repository is located on GitHub. That remote repository's URL is then later referred to as the "origin".

Branch - A Git branch is essentially an independent line of development. You can take advantage of branching when working on new features or bug fixes because it isolates your work from that of other team members. Different branches can be merged into any one branch as long as they belong to the same repository.

Commit - The commit command is used to save your changes to the local repository. Each commit will store the changes that have occurred since the last commit. This allows us to save our repository often so we don't lose work. But most importantly, we can go see the old versions of the files in our project and be able to turn back changes to a specific commit.

Push - The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repository.

Pull - The git pull is a Git command used to update the local version of a repository from a remote. By default, git pull updates the current local working branch (currently checked out branch) and updates the remote tracking branches for all other branches.

Merge - Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.

Status - The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.



```
git pull

git add .
git commit -m "first commit"
git push -u origin main
or
git add --all
git commit -m "first commit"
git push -u origin main



```
…or create a new repository on the command line

echo "# FullStackWeb" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sooof/FullStackWeb.git
git push -u origin main


…or push an existing repository from the command line

git remote add origin https://github.com/sooof/FullStackWeb.git
git branch -M main
git push -u origin main

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
