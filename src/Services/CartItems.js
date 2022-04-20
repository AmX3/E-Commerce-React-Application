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

// Updating the quantity within our nested object in DB. With nested objects, we need to use set() and {merge: true}.
// https://stackoverflow.com/questions/49150917/update-fields-in-nested-objects-in-firestore-documents
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

// Checking if there is an existing cartItem already in the DB. If selected product already exists, we update the quantity to new quantity. If not, we will create a new cartitem record.
export const addCartItems = async (record) => {
    // destructuring of object
    const { selectedProduct } = record;
    const cartItems = await getCartItems();
    const mapCart = cartItems.map((item) => item);
    const existingCartItem = mapCart.find(
        ({ selectedProduct: eachselectedProduct }) => {
            return eachselectedProduct.id === selectedProduct.id;
        }
    );

    if (existingCartItem) {
        await updateCartItems(existingCartItem.id, {
            ...existingCartItem.selectedProduct,
            quantity:
                existingCartItem.selectedProduct.quantity +
                selectedProduct.quantity,
        });
    } else {
        await createCartItem(record);
    }
    // console.log(cartItems.map((item) => item.selectedProduct.quantity));
    // console.log(existingCartItem2);
    // console.log(exist.selectedProduct);
};
