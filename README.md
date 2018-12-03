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

It’s important to note that the actual numbers you use to mark the list have no effect on the HTML output Markdown produces. The HTML Markdown produces from the above list is:

<ol>
<li>Bird</li>
<li>McHale</li>
<li>Parish</li>
</ol>
If you instead wrote the list in Markdown like this:

1.  Bird
1.  McHale
1.  Parish
or even:

3. Bird
1. McHale
8. Parish

https://daringfireball.net/projects/markdown/syntax
I vim all day
press i to insert 
press escape to stop insert
then to get out of this, hit escape then colon :wq
hi
