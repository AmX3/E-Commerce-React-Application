import firestore from "./firebase";

// CRUD - Create Read Update Delete

// Creating new record of item being added to cart
export const createCartItem = async (record) => {
    const collectionRef = firestore.collection("cartItems");
    await collectionRef.add(record);
};

// Read - Getting documents from our DB
export const getCartItems = async () => {
    const collectionRef = firestore.collection("cartItems");
    const queryData = await collectionRef.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update a single cartItem in our DB based on its unique id
export const updateCartItems = async (id, selectedProduct) => {
    const collectionRef = firestore.collection("cartItems");
    const docRef = collectionRef
        .doc(id)
        .set(
            { selectedProduct: { quantity: selectedProduct.quantity } },
            { merge: true }
        );
    await docRef;
};

// Removing a cartItem from our DB
export const deleteCartItems = async (id) => {
    const docRef = firestore.collection("cartItems").doc(id);
    await docRef.delete();
};

// Checking if there is an existing cartItem already in the DB, we update the quantity to new quantity. If not, we will create a new cartitem record.
export const addCartItems = async (record) => {
    // creating an object that only contains product and the quantity
    const { selectedProduct, quantity } = record;
    const cartItems = await getCartItems();
    const existingCartItem = cartItems.find(
        ({ selectedProduct: eachselectedProduct }) => {
            return eachselectedProduct.id === selectedProduct.id;
        }
    );

    if (existingCartItem) {
        await updateCartItems(existingCartItem.id, {
            ...existingCartItem,
            quantity: existingCartItem.quantity + quantity,
        });
    } else {
        await createCartItem(record);
    }
};
