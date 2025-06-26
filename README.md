# Encatch UI

**clone the project**

`git clone https://github.com/Encatch/Encatch_UI.git`

**checkout to develop branch**

`git checkout develop`

**create new local branch**

> change **localBranchName** in the command as you wish

`git checkout -b localBranchName`


---

> please make code changes when you are in your local branch

let's assume you have made few code changes, then..

**staging your changes**

`git add .`

`git commit -m "made changes"`


once your changes are commited. then..

> please pull before pushing to github remote branch

`git checkout develop`

`git pull`

`git checkout localBranchName`


**rebasing process** 🧐

`git rebase develop` 


*step1:*

_if you got conflicts_ 🥲 resolve.. and save files 

`git add .`

`git rebase --continue`

> (repeat step1) continue rebasing until all the conflict got resolved.

_if no conflicts_ 😁

> change remoteBranchName ex: feat/appointments

`git push -u origin localBranchName:remoteBranchName`


>at any point of time you want to stop 🛑 the rebasing process. 

`git rebase --abort`


🎉 congrats! you have successfully push your changes

next steps..

> create a Pull Request (PR) against develop branch.
