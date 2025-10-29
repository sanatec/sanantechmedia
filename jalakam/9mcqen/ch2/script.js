document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration and State ---
    const quizData = [
  {
    "question": "What is the primary function of the 'Styles' technique in LibreOffice Writer, according to the document?",
    "options": [
      { "text": "To add background color to the page.", "isCorrect": false },
      { "text": "To pre-define and reuse consistent formatting (font, color, size, etc.) for headings, paragraphs, and pages.", "isCorrect": true },
      { "text": "To automatically convert images to text.", "isCorrect": false },
      { "text": "To compress the document file size.", "isCorrect": false }
    ]
  },
  {
    "question": "Which visual effect is added to individual elements (objects, text) *on* a single slide in a presentation, as opposed to between slides?",
    "options": [
      { "text": "Slide Transition", "isCorrect": false },
      { "text": "Animation", "isCorrect": true },
      { "text": "Style", "isCorrect": false },
      { "text": "Page Break", "isCorrect": false }
    ]
  },
  {
    "question": "What happens to all headings in a document that were given the 'Heading 1' style when the 'Heading 1' style is modified to have a blue font color?",
    "options": [
      { "text": "Only the first heading will turn blue.", "isCorrect": false },
      { "text": "No changes will occur unless applied manually.", "isCorrect": false },
      { "text": "All headings using Heading 1 will turn blue.", "isCorrect": true },
      { "text": "Only the Table of Contents heading will turn blue.", "isCorrect": false }
    ]
  },
  {
    "question": "What is OCR (Optical Character Recognition)?",
    "options": [
      { "text": "A software for creating mathematical formulae.", "isCorrect": false },
      { "text": "A technique that recognizes characters in an image file or scanned document and converts them into text.", "isCorrect": true },
      { "text": "A LibreOffice Writer feature for arranging text around images.", "isCorrect": false },
      { "text": "A file format for document templates.", "isCorrect": false }
    ]
  },
  {
    "question": "Which LibreOffice Writer technique helps to easily apply the same style to different content scattered across a large document?",
    "options": [
      { "text": "Insert → Footnote", "isCorrect": false },
      { "text": "Fill Format Mode", "isCorrect": true },
      { "text": "Modify Styles", "isCorrect": false },
      { "text": "Page Break", "isCorrect": false }
    ]
  },
  {
    "question": "What is the key advantage of using the 'Table of Contents and Index' feature in LibreOffice Writer?",
    "options": [
      { "text": "It allows typing the entire Table of Contents manually.", "isCorrect": false },
      { "text": "It automatically creates the Table of Contents by recognizing heading styles and reflects page changes automatically.", "isCorrect": true },
      { "text": "It only allows creating a bibliography, not a Table of Contents.", "isCorrect": false },
      { "text": "It can be created without applying any styles to the document content.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the keyboard shortcut mentioned in the document to open the Styles window in LibreOffice Writer?",
    "options": [
      { "text": "Ctrl + C", "isCorrect": false },
      { "text": "F11", "isCorrect": true },
      { "text": "Ctrl + S", "isCorrect": false },
      { "text": "Esc", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of a 'Footnote' in a document?",
    "options": [
      { "text": "To create a hyperlink to a different document.", "isCorrect": false },
      { "text": "To insert the current page number.", "isCorrect": false },
      { "text": "To provide additional information, hints, or references at the bottom of a page.", "isCorrect": true },
      { "text": "To change the document's background color.", "isCorrect": false }
    ]
  },
  {
    "question": "In LibreOffice Writer, when creating a new style for a main heading, which style should typically be selected under the 'Inherit from' option in the Organizer tab to ensure correct Table of Contents arrangement?",
    "options": [
      { "text": "Text Body", "isCorrect": false },
      { "text": "Heading 1", "isCorrect": true },
      { "text": "Default Paragraph Style", "isCorrect": false },
      { "text": "Caption", "isCorrect": false }
    ]
  },
  {
    "question": "Which software is described as a convenient tool for preparing scientific/mathematical articles and dissertations, with the facility to create symbols and formulae?",
    "options": [
      { "text": "Scribus", "isCorrect": false },
      { "text": "LibreOffice Writer", "isCorrect": false },
      { "text": "LaTeX", "isCorrect": true },
      { "text": "gImageReader", "isCorrect": false }
    ]
  },
  {
    "question": "Anu and her friends are preparing a Folklore Encyclopedia for publication on what date?",
    "options": [
      { "text": "August 15, Independence Day", "isCorrect": false },
      { "text": "August 22, Folklore Day", "isCorrect": true },
      { "text": "October 2, Gandhi Jayanti", "isCorrect": false },
      { "text": "December 25, Christmas", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary function of OCR (Optical Character Recognition)?",
    "options": [
      { "text": "To highlight letters in a presentation.", "isCorrect": false },
      { "text": "To recognize characters in an image or scanned document and convert them into text.", "isCorrect": true },
      { "text": "To define pre-set formats for a document.", "isCorrect": false },
      { "text": "To create a Table of Contents manually.", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is an example of OCR software mentioned in the document?",
    "options": [
      { "text": "LibreOffice Writer", "isCorrect": false },
      { "text": "Scribus", "isCorrect": false },
      { "text": "gImageReader", "isCorrect": true },
      { "text": "TexMarker", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended action when opening files in the OTT format?",
    "options": [
      { "text": "Immediately publish the document.", "isCorrect": false },
      { "text": "First save the file because it is available as an unsaved file (Untitled).", "isCorrect": true },
      { "text": "Apply 'Heading 1' style to all content.", "isCorrect": false },
      { "text": "Convert it to a PDF file.", "isCorrect": false }
    ]
  },
  {
    "question": "What does OTT stand for in the context of LibreOffice Writer?",
    "options": [
      { "text": "Open Text Template", "isCorrect": false },
      { "text": "Open Type Tool", "isCorrect": false },
      { "text": "Open Document Standard Format (ODF) document template file.", "isCorrect": true },
      { "text": "Optical Text Transformation.", "isCorrect": false }
    ]
  },
  {
    "question": "Which feature in LibreOffice Writer is used to give movement to individual objects on a slide (if this were a presentation application)?",
    "options": [
      { "text": "Style", "isCorrect": false },
      { "text": "Transition", "isCorrect": false },
      { "text": "Animation", "isCorrect": true },
      { "text": "Footnote", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary benefit of using Styles when preparing a document with many pages?",
    "options": [
      { "text": "It makes it difficult to format each page separately.", "isCorrect": false },
      { "text": "It requires repeating the operation on each page for formatting changes.", "isCorrect": false },
      { "text": "It allows for easy, universal changes to design elements (like headings) across the entire document by modifying the style once.", "isCorrect": true },
      { "text": "It is only useful for short documents.", "isCorrect": false }
    ]
  },
  {
    "question": "How is the Styles window typically opened in LibreOffice Writer, besides clicking an icon in the sidebar?",
    "options": [
      { "text": "By pressing the Esc key.", "isCorrect": false },
      { "text": "By pressing the F11 key.", "isCorrect": true },
      { "text": "By right-clicking a heading and selecting Modify.", "isCorrect": false },
      { "text": "By clicking Files → Add images.", "isCorrect": false }
    ]
  },
  {
    "question": "In the process of changing a style like Heading 1, which option is selected after right-clicking the style name in the Styles window?",
    "options": [
      { "text": "New", "isCorrect": false },
      { "text": "Fill Format Mode", "isCorrect": false },
      { "text": "Modify", "isCorrect": true },
      { "text": "Load Styles from Template", "isCorrect": false }
    ]
  },
  {
    "question": "When modifying a style, where should changes for Malayalam fonts be made, according to the document?",
    "options": [
      { "text": "In the Western Text Font section.", "isCorrect": false },
      { "text": "In the CTL Font section.", "isCorrect": true },
      { "text": "In the Font Effects tab.", "isCorrect": false },
      { "text": "In the Alignment tab.", "isCorrect": false }
    ]
  },
  {
    "question": "Which key is used to exit the Fill Format Mode in the Styles window?",
    "options": [
      { "text": "Enter", "isCorrect": false },
      { "text": "Ctrl", "isCorrect": false },
      { "text": "Esc", "isCorrect": true },
      { "text": "F11", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the software that helps in preparing documents in LaTeX?",
    "options": [
      { "text": "gImageReader", "isCorrect": false },
      { "text": "Scribus", "isCorrect": false },
      { "text": "TexMarker", "isCorrect": true },
      { "text": "LibreOffice Writer", "isCorrect": false }
    ]
  },
  {
    "question": "Which feature is used to give additional information or references at the end of the entire document, instead of the bottom of each page?",
    "options": [
      { "text": "Footnote", "isCorrect": false },
      { "text": "Header", "isCorrect": false },
      { "text": "Endnote", "isCorrect": true },
      { "text": "Page Border", "isCorrect": false }
    ]
  },
  {
    "question": "Which menu path is used to insert a Footnote in LibreOffice Writer?",
    "options": [
      { "text": "File → Insert → Footnote", "isCorrect": false },
      { "text": "Edit → Footnote and Endnote → Footnote", "isCorrect": false },
      { "text": "Insert → Footnote and Endnote → Footnote", "isCorrect": true },
      { "text": "View → Footnote → Footnote", "isCorrect": false }
    ]
  },
  {
    "question": "What is the technique in LibreOffice for creating a new style by selecting formatted content and dragging it to the Styles window?",
    "options": [
      { "text": "Fill Format Mode", "isCorrect": false },
      { "text": "Load Styles from Template", "isCorrect": false },
      { "text": "Drag and Drop Method", "isCorrect": true },
      { "text": "Modify Style", "isCorrect": false }
    ]
  },
  {
    "question": "When creating a Table of Contents, the software creates it by recognizing which document feature?",
    "options": [
      { "text": "Page Borders", "isCorrect": false },
      { "text": "The styles given to the headings and subheadings.", "isCorrect": true },
      { "text": "The number of paragraphs.", "isCorrect": false },
      { "text": "The font color of the text.", "isCorrect": false }
    ]
  },
  {
    "question": "To convert text from an image file using gImageReader, what must be done after adding the image and selecting the language?",
    "options": [
      { "text": "Click Save output.", "isCorrect": false },
      { "text": "Click Acquire.", "isCorrect": false },
      { "text": "Click Recognize all.", "isCorrect": true },
      { "text": "Click Invert colors.", "isCorrect": false }
    ]
  },
  {
    "question": "What is Scribus?",
    "options": [
      { "text": "A type of OCR software.", "isCorrect": false },
      { "text": "A proprietary word processing software.", "isCorrect": false },
      { "text": "A free and open-source desktop publishing software.", "isCorrect": true },
      { "text": "A tool used for creating Footnotes.", "isCorrect": false }
    ]
  },
  {
    "question": "The styles that define some features for main headings in LibreOffice Writer are typically referred to as:",
    "options": [
      { "text": "Text Body", "isCorrect": false },
      { "text": "Heading 1", "isCorrect": true },
      { "text": "Subtitle", "isCorrect": false },
      { "text": "Quotations", "isCorrect": false }
    ]
  },
  {
    "question": "What happens when the mouse pointer is placed on a heading in the Table of Contents, and the document has features of a link?",
    "options": [
      { "text": "The page is automatically deleted.", "isCorrect": false },
      { "text": "A message appears, indicating that holding the Ctrl key and clicking will take you to that page.", "isCorrect": true },
      { "text": "The heading style is immediately modified.", "isCorrect": false },
      { "text": "The document is automatically converted to PDF.", "isCorrect": false }
    ]
  },
  {
    "question": "Which part of the document is the 'Web of Goodness' unit mentioned to be located using the Table of Contents?",
    "options": [
      { "text": "A page number that needs to be found from the Table of Contents.", "isCorrect": true },
      { "text": "Page 10", "isCorrect": false },
      { "text": "Page 25", "isCorrect": false },
      { "text": "The last page", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary content being collected by Anu and her friends for the Folklore Encyclopedia?",
    "options": [
      { "text": "Mathematical articles and dissertations.", "isCorrect": false },
      { "text": "Scientific data and images.", "isCorrect": false },
      { "text": "Descriptions of art forms related to rice cultivation, agricultural songs, tools, and proverbs.", "isCorrect": true },
      { "text": "Instructions for using gImageReader.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the significance of the `Inherit from` option when creating a new style in LibreOffice Writer?",
    "options": [
      { "text": "It defines the font color.", "isCorrect": false },
      { "text": "It determines the name of the new style.", "isCorrect": false },
      { "text": "It chooses the type of heading (like Heading 1, Heading 2, etc.) that the new style will be based on.", "isCorrect": true },
      { "text": "It is only used for Footnotes.", "isCorrect": false }
    ]
  },
  {
    "question": "What must be unchecked in the 'Table of Contents, Index or Bibliography' window to directly format the Table of Contents manually?",
    "options": [
      { "text": "Evaluate up to level", "isCorrect": false },
      { "text": "Protected against manual changes", "isCorrect": true },
      { "text": "Include index marks", "isCorrect": false },
      { "text": "Title field", "isCorrect": false }
    ]
  },
  {
    "question": "In the 'To Change the Style' activity, the instructions specify changing the Font Family to THUMBA, the Size to 14pt, and the Font Color to what?",
    "options": [
      { "text": "Blue", "isCorrect": false },
      { "text": "Red", "isCorrect": true },
      { "text": "Green", "isCorrect": false },
      { "text": "Black", "isCorrect": false }
    ]
  },
  {
    "question": "What is a main advantage of Scribus mentioned in the document?",
    "options": [
      { "text": "It is a proprietary word processor.", "isCorrect": false },
      { "text": "It is only used for creating Footnotes.", "isCorrect": false },
      { "text": "It supports Unicode fonts.", "isCorrect": true },
      { "text": "It is only available for Windows.", "isCorrect": false }
    ]
  },
  {
    "question": "What tab in the Style Formatting Window is used to change the distance of text from the margin?",
    "options": [
      { "text": "Font Effects", "isCorrect": false },
      { "text": "Alignment", "isCorrect": false },
      { "text": "Indents & Spacing", "isCorrect": true },
      { "text": "Organizer", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the Style Box at the left side of the formatting toolbar in LibreOffice Writer?",
    "options": [
      { "text": "To open the Styles window with F11.", "isCorrect": false },
      { "text": "To click and apply pre-defined styles like Heading 1, Text Body, etc.", "isCorrect": true },
      { "text": "To convert the document to PDF.", "isCorrect": false },
      { "text": "To insert a Page Break.", "isCorrect": false }
    ]
  },
  {
    "question": "What technique helps to apply the styles created using the 'Drag and Drop Method' to *other* documents?",
    "options": [
      { "text": "Fill Format Mode", "isCorrect": false },
      { "text": "Load Styles from Template in the Styles action option.", "isCorrect": true },
      { "text": "Modify Style", "isCorrect": false },
      { "text": "Insert → Footnote", "isCorrect": false }
    ]
  },
  {
    "question": "When creating a new style, which tab in the 'Style Formatting' window is used to enter the name of the new style?",
    "options": [
      { "text": "Alignment", "isCorrect": false },
      { "text": "Font Effects", "isCorrect": false },
      { "text": "Organizer", "isCorrect": true },
      { "text": "Indents & Spacing", "isCorrect": false }
    ]
  },
  {
    "question": "What is the recommended action for a user when opening an OTT file?",
    "options": [
      { "text": "Start typing immediately without saving.", "isCorrect": false },
      { "text": "It is advisable to save the file first.", "isCorrect": true },
      { "text": "Convert it to a TXT file.", "isCorrect": false },
      { "text": "Change the Font Family to THUMBA.", "isCorrect": false }
    ]
  },
  {
    "question": "The Table of Contents helps users to understand the topics, subtopics, and what other crucial information included in the book?",
    "options": [
      { "text": "The author's name.", "isCorrect": false },
      { "text": "Their page numbers.", "isCorrect": true },
      { "text": "The publication date.", "isCorrect": false },
      { "text": "The font style used.", "isCorrect": false }
    ]
  },
  {
    "question": "When including a Footnote, where does the explanation appear on the page?",
    "options": [
      { "text": "At the beginning of the document.", "isCorrect": false },
      { "text": "At the very bottom of the page, below a small line.", "isCorrect": true },
      { "text": "In the Header section.", "isCorrect": false },
      { "text": "In a separate pop-up window.", "isCorrect": false }
    ]
  },
  {
    "question": "If you are using gImageReader, the characters recognized from the image file are converted into text and appear where in the window?",
    "options": [
      { "text": "On the left side of the window.", "isCorrect": false },
      { "text": "In the Styles window.", "isCorrect": false },
      { "text": "In the Acquire section.", "isCorrect": false },
      { "text": "On the right side of the window.", "isCorrect": true }
    ]
  },
  {
    "question": "What is one of the key functions of the 'Alignment' tab when modifying a style?",
    "options": [
      { "text": "Setting the font color.", "isCorrect": false },
      { "text": "Setting the font size.", "isCorrect": false },
      { "text": "Arranging the text to be Center, Left, or Right aligned.", "isCorrect": true },
      { "text": "Defining the style as Heading 1.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Font Effects' tab when modifying a style?",
    "options": [
      { "text": "To change the distance from the margin.", "isCorrect": false },
      { "text": "To change the letter's design, such as Font Color.", "isCorrect": true },
      { "text": "To organize the styles.", "isCorrect": false },
      { "text": "To insert a table.", "isCorrect": false }
    ]
  },
  {
    "question": "According to the document, what is the default font size for 'Heading 1' when applied in LibreOffice Writer?",
    "options": [
      { "text": "14 pt", "isCorrect": false },
      { "text": "16 pt", "isCorrect": false },
      { "text": "18 pt", "isCorrect": true },
      { "text": "20 pt", "isCorrect": false }
    ]
  },
  {
    "question": "What is the main drawback of typing and manually adding a Table of Contents in a large document?",
    "options": [
      { "text": "It is easy to make changes.", "isCorrect": false },
      { "text": "It automatically reflects changes made to the pages.", "isCorrect": false },
      { "text": "It is a laborious task, and it is difficult to make changes when pages are added or deleted.", "isCorrect": true },
      { "text": "It links automatically to the page content.", "isCorrect": false }
    ]
  },
  {
    "question": "What must be done to create a new page where the Table of Contents will appear, after placing the cursor on the first page?",
    "options": [
      { "text": "Click File → New.", "isCorrect": false },
      { "text": "Insert a new page using Insert → Page break.", "isCorrect": true },
      { "text": "Right-click and select New Style.", "isCorrect": false },
      { "text": "Use the Fill Format Mode.", "isCorrect": false }
    ]
  },
  {
    "question": "What is a benefit of LaTeX over standard word processors for scientific writing?",
    "options": [
      { "text": "It is simpler to use for everyday documents.", "isCorrect": false },
      { "text": "It has the facility to create symbols and formulae needed for scientific papers.", "isCorrect": true },
      { "text": "It supports more Unicode fonts.", "isCorrect": false },
      { "text": "It is only available for commercial use.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary characteristic used to identify headings in a book?",
    "options": [
      { "text": "The length of the text.", "isCorrect": false },
      { "text": "The font, colour, size, and distance from the margin.", "isCorrect": true },
      { "text": "The use of footnotes.", "isCorrect": false },
      { "text": "Whether it is in Fill Format Mode.", "isCorrect": false }
    ]
  },
  {
    "question": "In the process of creating a new style, where do you right-click to select 'New' to create a new style in the Heading section?",
    "options": [
      { "text": "On the first heading in the document.", "isCorrect": false },
      { "text": "On 'Heading' in the Paragraph section of the Styles window.", "isCorrect": true },
      { "text": "On the 'Font Effects' tab.", "isCorrect": false },
      { "text": "On 'Default Paragraph Style'.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the folder that contains the 'footnote.txt' file for the activity on Footnote/Endnote?",
    "options": [
      { "text": "My Documents", "isCorrect": false },
      { "text": "School_Resources", "isCorrect": true },
      { "text": "LibreOffice", "isCorrect": false },
      { "text": "New Styles", "isCorrect": false }
    ]
  },
  {
    "question": "In gImageReader, what does the image file named 'kummatti.png' in the School Resources folder serve as an example for?",
    "options": [
      { "text": "A document template file.", "isCorrect": false },
      { "text": "An image file to be converted into text using OCR.", "isCorrect": true },
      { "text": "A file that contains the final Table of Contents.", "isCorrect": false },
      { "text": "A file containing a new style.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the effect of clicking on the number near a word to which a Footnote was applied?",
    "options": [
      { "text": "It applies Fill Format Mode.", "isCorrect": false },
      { "text": "It deletes the word.", "isCorrect": false },
      { "text": "It takes you to the explanation below.", "isCorrect": true },
      { "text": "It opens the Table of Contents window.", "isCorrect": false }
    ]
  },
  {
    "question": "When creating a new style called 'MyStyle2' for subheadings, which heading section should it be noted as belonging to?",
    "options": [
      { "text": "Heading 1 section.", "isCorrect": false },
      { "text": "Text Body section.", "isCorrect": false },
      { "text": "Heading 2 section.", "isCorrect": true },
      { "text": "Default Paragraph Style section.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the file extension for a LibreOffice document template file (Open Document Standard Format)?",
    "options": [
      { "text": ".docx", "isCorrect": false },
      { "text": ".pdf", "isCorrect": false },
      { "text": ".ott", "isCorrect": true },
      { "text": ".json", "isCorrect": false }
    ]
  },
  {
    "question": "To add a Table of Contents, which menu path is followed after placing the cursor and inserting a new page?",
    "options": [
      { "text": "Insert → Header and Footer.", "isCorrect": false },
      { "text": "Insert → Table of Contents and Index → Table of Contents, Index or Bibliography.", "isCorrect": true },
      { "text": "Edit → Index.", "isCorrect": false },
      { "text": "View → Table of Contents.", "isCorrect": false }
    ]
  },
  {
    "question": "What is one of the types of styles mentioned in the Styles window (Figure 2.3)?",
    "options": [
      { "text": "Image Styles", "isCorrect": false },
      { "text": "Paragraph Styles", "isCorrect": true },
      { "text": "Table Styles", "isCorrect": false },
      { "text": "Footnote Styles", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the 'Font' tab in the Style Formatting Window?",
    "options": [
      { "text": "To set the paragraph alignment.", "isCorrect": false },
      { "text": "To select the Font Family and Size.", "isCorrect": true },
      { "text": "To define the Endnote.", "isCorrect": false },
      { "text": "To insert an image.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the OCR software Tesseract OCR do?",
    "options": [
      { "text": "It helps in creating a class magazine.", "isCorrect": false },
      { "text": "It recognizes characters in a document image and converts them to text.", "isCorrect": true },
      { "text": "It changes the font family of a style.", "isCorrect": false },
      { "text": "It is used to make a Page Break.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the default category of style for a paragraph in LibreOffice Writer if no specific style is applied?",
    "options": [
      { "text": "Heading 1", "isCorrect": false },
      { "text": "Text Body", "isCorrect": true },
      { "text": "Caption", "isCorrect": false },
      { "text": "List", "isCorrect": false }
    ]
  },
  {
    "question": "When modifying a style, what feature allows you to control the space before and after a paragraph?",
    "options": [
      { "text": "Font Effects", "isCorrect": false },
      { "text": "Indents & Spacing", "isCorrect": true },
      { "text": "Borders", "isCorrect": false },
      { "text": "Alignment", "isCorrect": false }
    ]
  },
  {
    "question": "Which tab in the Styles modification window (F11) allows you to define the background color or image for the style?",
    "options": [
      { "text": "Indents & Spacing", "isCorrect": false },
      { "text": "Alignment", "isCorrect": false },
      { "text": "Area", "isCorrect": true },
      { "text": "Organizer", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary benefit of using a document template (OTT file)?",
    "options": [
      { "text": "It ensures the final document is immediately published online.", "isCorrect": false },
      { "text": "It pre-loads document settings, styles, and basic content, saving time for repetitive document creation.", "isCorrect": true },
      { "text": "It automatically converts all images to text using OCR.", "isCorrect": false },
      { "text": "It locks the document against all future changes.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the name of the feature that allows quick application of a style to multiple scattered paragraphs by painting the format?",
    "options": [
      { "text": "Style Marker", "isCorrect": false },
      { "text": "Format Painter", "isCorrect": false },
      { "text": "Fill Format Mode", "isCorrect": true },
      { "text": "Template Loader", "isCorrect": false }
    ]
  },
  {
    "question": "When converting a scanned document to text, why is OCR technology necessary?",
    "options": [
      { "text": "Scanned documents are already text files.", "isCorrect": false },
      { "text": "A scan is an image, and OCR is needed to interpret the character shapes and turn them into editable text.", "isCorrect": true },
      { "text": "It only helps to change the document's font size.", "isCorrect": false },
      { "text": "It is needed to print the document.", "isCorrect": false }
    ]
  },
  {
    "question": "To update a Table of Contents after making changes to the document (e.g., changing headings or adding pages), what action must be performed?",
    "options": [
      { "text": "The entire Table of Contents must be manually re-typed.", "isCorrect": false },
      { "text": "Right-click the Table of Contents and select 'Update Index/Table'.", "isCorrect": true },
      { "text": "Press the F11 key and apply a new style.", "isCorrect": false },
      { "text": "Insert a new Footnote.", "isCorrect": false }
    ]
  }
    
    ];

    let currentQuestionIndex = 0;
    let totalScore = 0;
    const userAnswers = []; // Stores user selections and score for review

    // --- DOM Elements ---
    const quizScreen = document.getElementById('quiz-screen');
    const reviewScreen = document.getElementById('review-screen');
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');
    const scoreDisplay = document.getElementById('score-display');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    // --- Sound Functions (Unchanged) ---
    function playCorrectSound() {
        try {
            correctSound.currentTime = 0; 
            correctSound.play().catch(error => {
                console.log('Could not play correct sound:', error);
                playFallbackSound('correct');
            });
        } catch (error) {
            console.log('Error playing correct sound:', error);
            playFallbackSound('correct');
        }
    }

    function playWrongSound() {
        try {
            wrongSound.currentTime = 0; 
            wrongSound.play().catch(error => {
                console.log('Could not play wrong sound:', error);
                playFallbackSound('wrong');
            });
        } catch (error) {
            console.log('Error playing wrong sound:', error);
            playFallbackSound('wrong');
        }
    }

    function playFallbackSound(type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'correct') {
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            } else {
                oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime); // F4
            }
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (error) {
            console.log('Fallback sound also failed:', error);
        }
    }

    // --- Core Functions ---

    /**
     * Updates the score display in the header
     */
    function updateScoreDisplay() {
        scoreDisplay.textContent = `Score: ${totalScore.toFixed(0)}`; 
    }

    /**
     * Loads the current question onto the screen.
     */
    function loadQuestion() {
        if (currentQuestionIndex >= quizData.length) {
            showReviewScreen();
            return;
        }

        const question = quizData[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];
        const hasBeenSubmitted = !!userAnswer;

        // 1. Reset UI State
        questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${quizData.length}`;
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        feedbackMessage.classList.remove('show', 'success', 'partial', 'error');
        feedbackMessage.textContent = '';
        optionsContainer.classList.remove('disabled');

        // 2. Set Navigation Buttons
        backButton.disabled = currentQuestionIndex === 0;
        nextButton.textContent = hasBeenSubmitted ? 'Next' : 'Submit';
        
        if (!hasBeenSubmitted) {
            // Initially disable Submit button until an option is selected
            nextButton.disabled = true;
        } else {
            // If submitted, enable Next
            nextButton.disabled = false;
        }

        // 3. Create Option Buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.dataset.index = index;
            button.dataset.isCorrect = option.isCorrect;
            
            button.disabled = hasBeenSubmitted; 
            if (!hasBeenSubmitted) {
                button.addEventListener('click', selectOption); 
            }

            // Restore state if submitted
            if (hasBeenSubmitted) {
                if (userAnswer.selected.includes(index)) {
                    button.classList.add('selected');
                }
                // Show correction
                if (option.isCorrect) {
                    button.classList.add('correct');
                } else if (userAnswer.selected.includes(index) && !option.isCorrect) {
                    button.classList.add('wrong');
                }
                displayFeedback(userAnswer.score);
            }
            
            optionsContainer.appendChild(button);
        });

        // Update score display
        updateScoreDisplay();
    }

    /**
     * Selects one option and deselects all others, enabling the submit button.
     */
    function selectOption(e) {
        // 1. Deselect all
        optionsContainer.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // 2. Select the clicked button
        const button = e.target;
        button.classList.add('selected');
        
        // 3. Enable next button
        nextButton.disabled = false;
    }

    /**
     * Handles the 'Next' button click: submits the answer or moves to the next question.
     */
    function handleNext() {
        // If it's a new question (unanswered) -> SUBMIT
        if (!userAnswers[currentQuestionIndex]) {
            submitAnswer();
        } 
        // If already submitted -> NEXT QUESTION
        else {
            currentQuestionIndex++;
            loadQuestion();
        }
    }

    /**
     * Calculates score, provides feedback, and saves the result.
     */
    function submitAnswer() {
        const question = quizData[currentQuestionIndex];
        const selectedButton = optionsContainer.querySelector('.option-button.selected');
        const selectedIndex = selectedButton ? parseInt(selectedButton.dataset.index) : -1;
        
        let score = 0;
        let isCorrect = false;

        if (selectedIndex !== -1) {
            isCorrect = question.options[selectedIndex].isCorrect;
            score = isCorrect ? 1 : 0;
        }

        // 1. Save Answer
        totalScore += score;
        userAnswers[currentQuestionIndex] = { selected: selectedIndex !== -1 ? [selectedIndex] : [], score: score };

        // 2. Update UI with Feedback and Correction
        optionsContainer.classList.add('disabled'); // Prevent further clicks
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
            const index = parseInt(button.dataset.index);
            const isCorrectOption = question.options[index].isCorrect;

            if (isCorrectOption) {
                button.classList.add('correct');
            } else if (index === selectedIndex && !isCorrectOption) {
                button.classList.add('wrong');
            }
        });

        // 3. Play Sound and Animation
        if (score === 1) {
            playConfetti();
            playCorrectSound();
        } else {
            playWrongSound();
        }

        // 4. Display Textual Feedback
        displayFeedback(score);

        // 5. Update Navigation and Score
        nextButton.textContent = 'Next';
        nextButton.disabled = false;
        updateScoreDisplay();
    }

    /**
     * Displays a textual message based on the score.
     */
    function displayFeedback(score) {
        feedbackMessage.classList.add('show');
        
        if (score === 1) {
            // Correct answer
            feedbackMessage.textContent = "🎉 Correct! You earned 1 point!";
            feedbackMessage.className = 'feedback-message show success';
        } else {
            // Wrong answer
            feedbackMessage.textContent = "📚 Incorrect. The correct answer is highlighted in green. You earned 0 points.";
            feedbackMessage.className = 'feedback-message show error';
        }
    }

    /**
     * CUSTOM CANVAS IMPLEMENTATION (Replaces the confetti library call)
     * Plays the custom fireworks animation from the middle of the app area to the top.
     */
    function playConfetti() {
        const canvas = document.getElementById("star-canvas");
        if (!canvas) return; 
        
        const ctx = canvas.getContext("2d");
        // Always resize to fit the current window on launch
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const colors = ["#FFD700", "#FFEE58", "#FFF176", "#FFAB00", "#FF6F00"];
        
        // Explosion Origin: Middle of screen width, roughly 40% down from the top (middle of app area)
        const centerX = canvas.width / 2;
        const centerY = canvas.height * 0.4; 

        // Create initial explosion particles
        for (let i = 0; i < 60; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 3;
            particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: Math.random() * 4 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 100
            });
        }

        function drawStar(x, y, size, color) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(x, y);
            ctx.moveTo(0, -size);
            for (let i = 0; i < 5; i++) {
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size * 0.5);
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, -size);
            }
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.restore();
        }

        function animate() {
            // Clear the canvas completely for a clean look
            ctx.clearRect(0, 0, canvas.width, canvas.height); 

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05; // gravity pull
                p.life--;

                if (p.life > 0) {
                    drawStar(p.x, p.y, p.size, p.color);
                } else {
                    particles.splice(i, 1);
                }
            });

            // Continue animation if particles remain
            if (particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                // Final clear once animation is complete
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        animate();
    }

    /**
     * Handles the 'Back' button click.
     */
    function handleBack() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    /**
     * Switches to the Review Screen and generates the review content.
     */
    function showReviewScreen() {
        quizScreen.classList.remove('active');
        reviewScreen.classList.add('active');
        
        // Hide/disable navigation buttons
        backButton.style.display = 'none';
        nextButton.style.display = 'none';

        const reviewDetails = document.getElementById('review-details');
        reviewDetails.innerHTML = '';

        quizData.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const item = document.createElement('div');
            item.classList.add('review-item');

            const scoreDisplay = userAnswer ? `<span class="review-score">${userAnswer.score.toFixed(0)} / 1</span>` : '';

            item.innerHTML = `
                <div class="review-question-title">Q${index + 1}: ${question.question} ${scoreDisplay}</div>
                <ul style="list-style-type: none; padding-left: 0;">
                    ${question.options.map((opt, i) => {
                        const isSelected = userAnswer && userAnswer.selected.includes(i);
                        let className = '';
                        if (opt.isCorrect) {
                            className = 'correct';
                        } else if (isSelected && !opt.isCorrect) {
                            className = 'wrong';
                        }
                        return `<li class="${className}" style="padding: 5px; margin-left: 10px; border-left: 3px solid ${opt.isCorrect ? '#4cd964' : (isSelected ? '#ff3b30' : '#ccc')}; margin-bottom: 3px; background-color: ${className === 'correct' ? '#e6ffe6' : (className === 'wrong' ? '#ffe6e6' : 'white')};">
                            ${opt.text}
                            ${isSelected ? ' (Your Selection)' : ''}
                        </li>`;
                    }).join('')}
                </ul>
            `;
            reviewDetails.appendChild(item);
        });

        // Display Final Score
        const finalScore = document.createElement('div');
        finalScore.classList.add('review-final-score');
        finalScore.textContent = `FINAL SCORE: ${totalScore.toFixed(0)} / ${quizData.length.toFixed(0)}`;
        reviewDetails.appendChild(finalScore);
    }

    // --- Event Listeners and Initialization ---
    backButton.addEventListener('click', handleBack);
    nextButton.addEventListener('click', handleNext);

    // Preload sounds
    correctSound.load();
    wrongSound.load();

    // Initial load
    loadQuestion();
    updateScoreDisplay();
});
