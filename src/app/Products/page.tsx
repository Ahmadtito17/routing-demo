import Link from "next/link";

export default function ProductList() {
    return (
          <div>
            <h1>Product List</h1>
            <br />
            <Link href='/Products/1'><h2>Produk 1</h2></Link>
            <br />
            <Link href='/Products/2'><h2>Produk 2</h2></Link>
            <br />
            <Link href='/Products/1'><h2>Produk 3</h2></Link>
          </div>
          );
        }