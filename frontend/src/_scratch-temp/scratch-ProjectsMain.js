//   <<<<ProjectsMainPage.js>>>>>>

//-----------Tuesday 3/22:

const [, token] = useAuth();
const [newTitle, setNewTitle] = useState('');
const [newCompany, setNewCompany] = useState('');
const [newPurchaseDate, setNewPurchaseDate] = useState('');
const [newPrice, setNewPrice] = useState('');
const [newPurchaseType, setNewPurchaseType] = useState('');

const handleTitle = (event) => setNewTitle(event.target.value);
const handleCompany = (event) => setNew(event.target.value);
const handlePurchaseDate = (event) => setNewPurchaseDate(event.target.value);
const handlePrice = (event) => setNewPrice(event.target.value);
const handlePurchaseType = (event) => setNewPurchaseType(event.target.value);