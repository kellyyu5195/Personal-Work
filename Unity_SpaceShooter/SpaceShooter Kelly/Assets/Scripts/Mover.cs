using UnityEngine;
using System.Collections;

public class Mover : MonoBehaviour {

	public Rigidbody rb;
	public float speed;

	void Start() {
		rb.velocity = transform.forward * speed;

	}
}
