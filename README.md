# Dummy
## This is a header
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> h
>     return shell_exec("echo $input | $markdown_script");
*   Bird
*   Magic
will turn into:

<ul>
<li>Bird</li>
<li>Magic</li>
</ul>
But this:

*   Bird

*   Magic
will turn into:

<ul>
<li><p>Bird</p></li>
<li><p>Magic</p></li>
</ul>


https://daringfireball.net/projects/markdown/syntax
I vim all day
press i to insert 
press escape to stop insert
then to get out of this, hit escape then colon :wq
hi
