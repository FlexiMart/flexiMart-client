export class GlobalConstants {
   //message
   public static genericError: string = "Something went wrong.Please try again later.";

   //name field regex
   public static nameRegex: string = "[a-zA-Z0-9]*";
   //email field regex
   public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
   //phone number regex
   public static contactNumberRegex: string = "^[e0-9]{10,10}$";
   //phone number verify code regex
   public static verifyCodeRegex: string = "^[e0-9]{4,4}$";
   //error
   public static error: string = "error";

   //states of india
   public static indiaStates = ['Andhra Pradesh', 'Telangana'];
   //district of Andhra & Telangana
   public static districts = [
      {
         "andhraDistricts": ['Alluri Sitharama Raju', 'Anakapalli', 'Anantapuram', 'Annamayya', 'Bapatla', 'Chittoor', 'Dr.B.R.Ambedkar Konaseema', 'East Godavari', 'Eluru', 'Guntur', 'Kakinada', 'Krishna', 'Kurnool', 'Nandyal', 'Nellore', 'NTR', 'Palnadu', 'Parvathipuram Manyam', 'Prakasam', 'Srikakulam', 'Sri Sathya Sai', 'Tirupati', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa']
      },
      {
         "telanganaDistricts": ['Adilabad', 'Asifabad', 'Bhadradri-Kothagudem', 'Bhupalpally', 'Gadwal', 'Hyderabad', 'Jagitial', 'Janagama', 'Kamareddy', 'Karimnagar', 'Khammam', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medchal', 'Medak', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Narayanpet', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Ranga Reddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal(Rural)', 'Warangal(Urban)', 'Yadadri-Bhuvanagiri']
      }
   ]
   //mandals of Telangana disticts
   public static telanganaDistictMandals = [
      {
         "adilabadMandals": ['Adilabad(Rural)', 'Adilabad(Urban)', 'Bazarhathnoor', 'Bela', 'Bheempur', 'Boath', 'Gadiguda', 'Gudihatnoor', 'Ichoda', 'Inderavelly', 'Jainad', 'Mavala', 'Narnoor', 'Neradigonda', 'Sirikonda', 'Talamadugu', 'Tamsi', 'Utnur']
      },
      {
         "asifabadMandals": ['Asifabad', 'Bejjur', 'Chintalamanepalli', 'Dahegaon', 'Jainoor', 'Kagaznagar', 'Kerameri', 'Koutala', 'Lingapur', 'Penchikalpet', 'Rebbena', 'Sirpur-T', 'Sirpur-U', 'Tiryani', 'Wankidi']
      },
      {
         "bhadradriMandals": ['Allapalli', 'Annapureddypalli', 'Aswaraopeta', 'Aswapuram', 'Bhadrachalam', 'Burgampahad', 'Chandrugonda', 'Cherla', 'Chunchupalli', 'Dammapeta', 'Dummugudem', 'Gundala', 'Julurpad', 'Karakagudem', 'Kothagudem', 'Laxmidevipalli', 'Manuguru', 'Mulakalapally', 'Palvancha', 'Pinapaka', 'Sujatanagar', 'Tekulapally', 'Yellandu']
      },
      {
         "bhoopalpallyMandals": ['Bhupalpally', 'Chityal', 'Ghanapur(Mulug)', 'Kataram', 'Mahadevpur', 'Malhar rao', 'Mogullapalle', 'Mutharam(Mahadevpur)', 'Palimela', 'Regonda', 'Tekumatla']
      },
      {
         "gadwalMandals": ['Aiza', 'Alampur', 'Dharoor', 'Gadwal', 'Gattu', 'Itikyala', 'Kalur Thimman Doddi', 'Maldakal', 'Manopad', 'Rajoli', 'Undavelly', 'Waddepally']
      },
      {
         "hyderabadMandals": ['Vijayawada Urban', 'Machilipatnam', 'Penamaluru', 'Gudivada', 'Vijayawada Rural', 'Nuzvid']
      },
      {
         "jagtialMandals": ['Beerpur', 'Buggaram', 'Dharmapuri', 'Gollapalli', 'Ibrahimpatnam', 'Jagitial(Urban)', 'Jagitial(Rural)', 'Kathalapur', 'Kodimial', 'Korutla', 'Mallapur', 'Mallial', 'Medipalli', 'Metpally', 'Pegadapalli', 'Raikal', 'Sarangapur', 'Velgatoor']
      },
      {
         "janagamaMandals": ['Bachannapet', 'Chilpur', 'Devaruppula', 'Ghanpur(Stn)', 'Janagama', 'Kodakandla', 'Lingala Ghanpur', 'Narmetta', 'Palakurthy', 'Ragunathpally', ' Tharigoppula', 'Zaffergadh']
      },
      {
         "kamareddyMandals": ['Banswada', 'Bhiknoor', 'Bibipet', 'Bichkunda', 'Birkoor', 'Domakonda', 'Gandhari', 'Jukkal', 'Kamareddy', 'Lingampet', 'Machareddy', 'Madnoor', 'Nagareddipet', 'Nasrullabad', 'Nizamsagar', 'Pedda Kodapgal', 'Pitlam', 'Rajampet', 'Ramareddy', 'Sadasivanagar', 'Tadwai', 'Yellareddy']
      },
      {
         "karimnagarMandals": ['Chigurumamidi', 'Choppadandi', 'Ellandakunta', 'Gangadhara', 'Ganneruvaram', 'Huzurabad', 'Jammikunta', 'Karimnagar(Urban)', 'karimnagar(Rural)', 'kothapally', 'Manakondur', 'Ramadugu', 'Shankarapatnam', 'Thimmapur', 'Veenavanka', 'V.Saidapur']
      },
      {
         "khammamMandals": ['Bonakal', 'Chinthakani', 'Enkoor', 'Kallur', 'Kamepally', 'khammam(Urban)', 'Khammam(Rural)', 'Konijerla', 'Kusumanchi', 'Madhira', 'Mudigonda', 'Nelakondapally', 'Penubally', 'Raghunadhapalem', 'Sathupally', 'Singareni', 'Thallada', 'Thirumalayapalem', 'Vemsoor', 'Wyra', 'Yerrupalem']
      },
      {
         "mahabubabadMandals": ['Bayyaram', 'Chinnagudur', 'Danthalapalle', 'Dornakal', 'Gangaram', 'Garla', 'Gudur', 'Kesamudram', 'Kothaguda', 'kuravi', 'Mahabubabad', 'Maripeda', 'Narsimhulapet', 'Peddavangara', 'Thorrur']
      },
      {
         "mahabubnagarMandals": ['Addakal', 'Balanagar', 'Bhoothpur', 'CC Kunta', 'Devarakadra', 'Gandeed', 'Hanwada', 'Jadcherla', 'Koilkonda', 'MBNR', 'Midjil', 'Moosapet', 'Mohammadabad', 'Nawabpet', 'Rajapur']
      },
      {
         "mancherialMandals": ['Bellampally', 'Bheemaram', 'Bheemini', 'Chennur', 'Dandepally', 'Hajipur', 'Jaipur', 'Jannaram', 'Kannepally', 'Kasipet', 'Kotapally', 'Luxettipet', 'Mancherial', 'Mandamarri', 'Naspur', 'Nennel', 'Tandur', 'Vemanpally']
      },
      {
         "medchalMandals": ['Alwal', 'Balanagar', 'Bachupally', 'Dundigal Gandimaisamma', 'Ghatkesar', 'Kapra', 'Keesara', 'Kukatpally', 'Malkajgiri', 'Medchal', 'Medipally', 'Muduchinthalapally', 'Quthbullapur', 'Shamirpet', 'Uppal']
      },
      {
         "medakMandals": ['Alladurg', 'Chegunta', 'Chilipched', 'Havelighanpur', 'Kowdipally', 'Kulcharam', 'Kowdipally', 'Manoharabad', 'Medak', 'Narsapur', 'Narsingi', 'Papannapet', 'Regode', 'Ramayampet', 'Shankarampet-A', 'Shankarampet-R', 'Shivampet', 'Tekmal', 'Toopran', 'Yeldurthy']
      },
      {
         "muluguMandals": ['Eturnagaram', 'Govindaraopet', 'Kannaigudem', 'Mangapet', 'Mulugu', 'S S Tadvai', 'Venkatapuram', 'Venkatpur', 'Wazeedu']
      },
      {
         "nagarkurnoolMandals": ['Achampet', 'Amrabad', 'Balmoor', 'Bijinapally', 'Charakonda', 'Kalwakurty', 'Kodair', 'Kollapur', 'Lingala', 'Nagarkurnool', 'Padara', 'Peddakothapally', 'Pentlavelli', 'Tadoor', 'Telkapally', 'Thimmajipet', 'Uppununtala', 'Urkonda', 'Vangoor', 'Veldanda']
      },
      {
         "nalgondaMandals": ['Advidevulapally', 'Anumula', 'Chandampet', 'Chandur', 'Chinthapalli', 'chityala', 'Damaracherla', 'Devarakonda', 'Gundlapalli', 'Gurrampode', 'Kanagal', 'Kattangoor', 'Kethepalli', 'Kondamallepally ', 'Madugulapally', 'Marriguda', 'Miryalaguda', 'Munugode', 'Nakerekal', 'Nalgonda', 'Nampalli', 'Narketpalli', 'Neredugommu', 'Nidmanoor', 'P.A.Palli', 'Peddavoora', 'Shali Gouraram', 'Thipparthy', 'Tirumalagiri', 'Tripuraram', 'Vemulapalli']
      },
      {
         "nirmalMandals": ['Basar', 'Bhainsa', 'Dasturabad', 'Dilawarpur', 'Kaddem', 'Khanapur', 'Kubeer', 'Kuntala', 'Laxmanchanda', 'Lokeshwaram', 'Mamada', 'Mudhole', 'Narsapur', 'Nirmal', 'Nirmal(Rural)', 'Pembi', 'Sarangapur', 'Soan', 'Tanoor']
      },
      {
         "narayanpetMandals": ['Damargidda', 'Dhanwada', 'Kosgi', 'Krishna', 'Maddur', 'Maganoor', 'Makthal', 'Marikal', 'Narayanpet', 'Narwa', 'Utkoor']
      },
      {
         "nizamabadMandals": ['Armoor', 'Balkonda', 'Bheemgal', 'Bodhan', 'Chandur', 'Dharapply', 'Dichapally', 'Indalwai', 'Jakranpally', 'Kammarapally', 'Kotagiri', 'Makloor', 'Mendora', 'Morthad', 'Mosra', 'Mugpal', 'Mupkal', 'Nandipet', 'Navipet', 'Nizamabad North', 'Nizamabad Rural', 'Nizamabad South', 'Renjal', 'Rudrur', 'Sirikonda', 'Vailpoor', 'Varni', 'Yedpally', 'Yergatla',]
      },
      {
         "peddapalliMandals": ['Anthergoan', 'Dharmaram', 'Eligaid', 'Julapalli', 'Kalvasrirampoor', 'Kamanpur', 'Manthani', 'Mutharam', 'Odela', 'Palakurthi', 'Peddapalli', 'Ramagiri', 'Ramagundam', 'Sulthanabad']
      },
      {
         "rajannaSircillaMandals": ['Boinpally', 'Chandurthy', 'Ellanthakunta', 'Gambhiraopet', 'Konaraopet', 'Mustabad', 'Rudrangi', 'Sircilla(Urban)', 'Thangallapalli', 'Vemulawada', 'Vemulawada(Rural)', 'Veernapalli', 'Yellareddipet']
      },
      {
         "rangaReddyMandals": ['Abdullapurmet', 'Amangal', 'Balapur', 'Chevella', 'Chowdergudem', 'Farooqnagar', 'Gandipet', 'Hayathnagar', 'Ibrahimpatnam', 'Kadthal', 'kandukur', 'Keshampeta', 'Kondurg', 'Kothur', 'Madgul', 'Maheshwaram', 'Manchal', 'Moinabad', 'Nandigama', 'Rajendranagar', 'Saroornagar', 'Serilingampalli', 'Shabad', 'Shamshabad', 'Shankerpalle', 'Talakondapally', 'Yacharam']
      },
      {
         "sangareddyMandals": ['Ameenapur', 'Andhole', 'Gummadidala', 'Hathanoora', 'Kaddem', 'Khanapur', 'Kubeer', 'Kuntala', 'Laxmanchanda', 'Lokeshwaram', 'Mamada', 'Mudhole', 'Narsapur', 'Nirmal', 'Nirmal(Rural)', 'Pembi', 'Sarangapur', 'Soan', 'Tanoor']
      },
      {
         "narayanpetMandals": ['Damargidda', 'Dhanwada', 'Kosgi', 'Krishna', 'Maddur', 'Maganoor', 'Makthal', 'Marikal', 'Narayanpet', 'Narwa', 'Utkoor']
      },
      {
         "nizamabadMandals": ['Armoor', 'Balkonda', 'Bheemgal', 'Bodhan', 'Chandur', 'Dharapply', 'Dichapally', 'Indalwai', 'Jakranpally', 'Kammarapally', 'Kotagiri', 'Makloor', 'Mendora', 'Morthad', 'Mosra', 'Mugpal', 'Mupkal', 'Nandipet', 'Navipet', 'Nizamabad North', 'Nizamabad Rural', 'Nizamabad South', 'Renjal', 'Rudrur', 'Sirikonda', 'Vailpoor', 'Varni', 'Yedpally', 'Yergatla',]
      },
      {
         "peddapalliMandals": ['Anthergoan', 'Dharmaram', 'Eligaid', 'Julapalli', 'Kalvasrirampoor', 'Kamanpur', 'Manthani', 'Mutharam', 'Odela', 'Palakurthi', 'Peddapalli', 'Ramagiri', 'Ramagundam', 'Sulthanabad']
      },
      {
         "rajannaSircillaMandals": ['Boinpally', 'Chandurthy', 'Ellanthakunta', 'Gambhiraopet', 'Konaraopet', 'Mustabad', 'Rudrangi', 'Sircilla(Urban)', 'Thangallapalli', 'Vemulawada', 'Vemulawada(Rural)', 'Veernapalli', 'Yellareddipet']
      },
      {
         "rangaReddyMandals": ['Abdullapurmet', 'Amangal', 'Balapur', 'Chevella', 'Chowdergudem', 'Farooqnagar', 'Gandipet', 'Hayathnagar', 'Ibrahimpatnam', 'Kadthal', 'kandukur', 'Keshampeta', 'Kondurg', 'Kothur', 'Madgul', 'Maheshwaram', 'Manchal', 'Moinabad', 'Nandigama', 'Rajendranagar', 'Saroornagar', 'Serilingampalli', 'Shabad', 'Shamshabad', 'Shankerpalle', 'Talakondapally', 'Yacharam']
      }
   ]

   //different Agriculture Product Names for assign to productName Dropdown list.
  public static agricultureProductName=['Agriculture Tractor','Tractor Cultivate Items','Pesticide Machine','Current Motor','Drip Motor','Solar Set','Bull Cultivate Items','Human Caltivate Items','Labour Work'];

//different type's of Animals for assign to animalName Dropdown list.
public static animalNamesList=['Bull','Cow','Buffalo','Dog','Hen','Sheep','Goat','Rabbit','Donkey'];

//different type's of Furnitures for assign to furnitureName Dropdwon list.
public static furnitureNames=['Almirah','Bed','Dining Table','Dressing Table','Door','Diwan','Computer Table&Chair','Study Table&Chair','Office Table','Office Chair','Folding Chair','Plastic Chair'];

//different type's of Electronics for assign to electronicName dropdwon list
public static electronicNamesList=['Air Conditioner','Air Cooler','Laptop','Mobile','Watch','Camera','TVs','Desktop Computer','Refrigerator','Washing Machine','Generator','Inverters','Home Theater','Xerox Machine']

//different type's of Vehicles for assign to vehicleName dropdwon list.
public static vehicleNameList=['Auto','Bike','Bycycle','Car','Small Bus','Big Bus','Small Track','Mediam Track','Big Track','Scooter'];
}