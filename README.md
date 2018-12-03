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

To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab. For example, given this input:

This is a normal paragraph:

    This is a code block.
Markdown will generate:

<p>This is a normal paragraph:</p>

<pre><code>This is a code block.
</code></pre>`

One level of indentation — 4 spaces or 1 tab — is removed from each line of the code block. For example, this:

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell
will turn into:

<p>Here is an example of AppleScript:</p>

<pre><code>tell application "Foo"
    beep
end tell
</code></pre>


The implicit link name shortcut allows you to omit the name of the link, in which case the link text itself is used as the name. Just use an empty set of square brackets — e.g., to link the word “Google” to the google.com web site, you could simply write:

[Google][]
And then define the link:

[Google]: http://google.com/


https://daringfireball.net/projects/markdown/syntax
I vim all day
press i to insert 
press escape to stop insert
then to get out of this, hit escape then colon :wq
ihi
