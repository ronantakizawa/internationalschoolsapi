The international schools API allows users to access data related to international schools globally. The GET methods provided in this API allow users to find international schools within specific regions, search for specific schools, and find the most affordable schools within regions.

 

The API lists information about international schools including:

-        Name

-        Region

-        Address

-        Website

-        Age Range

-        Curriculum

-        Common Nationality

-        Number of Nationalities

-        Number of Students

-        Average Class Size

-        Approximate Fees (USD)

-        Availability of School Buses

 

Regions covered:

-        london

-        dubai

-        abudhabi

-        muscat

-        doha

-        newdelhi

-        chennai

-        bangkok

-        kualalumpur

-        bali

-        jakarta

-        hochiminhcity

-        hanoi

-        singapore

-        manila

-        shanghai

-        beijing

-        guangzhou

-        seoul

-        tokyo

-        taipei

 

 

METHODS:

 

getAll(‘/all’): Get all international schools

 

getByName(‘/name/:queryname’): Get international school by name. Enter region with no spaces all lowercase

 

 

getByRegion(‘/:region’): Get international schools in a specified region. Enter region with no spaces all lowercase.

 

getByRegionSortByFees(‘/:regionname/sortbyfees/:order’): Get international schools in a specified region. Enter "ascending" or "descending" to specify order.

 

 

getByRegionSortByStudentSize(‘/:regionname/sortbystudentsize/:order’): Get international schools in a specified region. Enter "ascending" or "descending" to specify order.
